const sendgrid = require('@sendgrid/mail');
const request = require('request-promise-native');

sendgrid.setApiKey(process.env.SG_KEY);

exports.contactUsEmail = (req, res) => {

  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  } else {

    const { firstName, lastName, email, phone, text, recaptcha } = req.body;

    return Promise.resolve()
      .then(() => {
        if (req.method !== 'POST') {
          const error = new Error('Only POST requests are accepted');
          error.code = 405;
          throw error;
        }

        if (!email) {
          const error = new Error('Email address missing');
          error.code = 422;
          throw error;
        }

        if (!recaptcha) {
          const error = new Error('Are you a robot?');
          error.code = 422;
          throw error;
        }

        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}&remoteip=${req.connection.remoteAddress}`;

        return request(verificationUrl);
      })

      .then((recaptchaResponse) => {
        const body = JSON.parse(recaptchaResponse);

        if (body.success !== undefined && !body.success) {
          const error = new Error('Failed captcha verification');
          error.code = 422;
          throw error;
        }
      })

      .then(() => {
        const message = {
          to: 'manuel@crossfit-secaucus.com',
          from: 'CS Website <noreply@crossfit-secaucus.com>',
          subject: `Contact Form: ${firstName || ''} ${lastName || ''}`,
          reply_to: email || '',
          text: `${text || ''}

          --
          ${firstName || ''} ${lastName || ''}
          ${email || ''}
          ${phone || ''}
          `,
        };

        return sendgrid.send(message);
      })

      .then((sendgridResponse) => {
        if (sendgridResponse.statusCode < 200 || sendgridResponse.statusCode >= 400) {
          const error = Error(sendgridResponse.body);
          error.code = sendgridResponse.statusCode;
          throw error;
        }

        const message = {
          to: req.body.email,
          from: 'CrossFit Secaucus <trainers@crossfit-secaucus.com>',
          subject: 'We Received Your Request',
          templateId: '87bc60d1-d26c-4bc0-a76e-b15ad55786fa',
          substitutions: {
            firstName: firstName || '',
          },
          substitutionWrappers: ['{{', '}}'],
        };

        return sendgrid.send(message);
      })

      .then(() => res.json({ status: 'success' }))

      .catch((err) => {
        console.error(err);
        const code = err.code || (err.response ? err.response.statusCode : 500) || 500;
        res.status(code).json({ status: 'error', message: err.message });
        return Promise.reject(err);
      });
  }
};
