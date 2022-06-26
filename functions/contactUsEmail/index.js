const sendgrid = require('@sendgrid/mail');
const request = require('request-promise-native');

sendgrid.setApiKey(process.env.SG_KEY);

const INTERNAL_EMAIL = 'trainers@crossfit-secaucus.com'

const TEMPLATES = {
  contactUs: {
    templateId: 'd-05c804ec0aee4e629eced9a1d0cbb44c',
    internalSubject: 'Contact Us',
    subject: 'We Received Your Request',
    dynamicTemplateFields: [
      'firstName',
    ],
  },
  holdRequest: {
    templateId: 'd-130a24883a664d0a9fba2c1600723ccd',
    internalSubject: 'Hold Request',
    subject: 'We Received Your Hold Request',
    dynamicTemplateFields: [
      'firstName',
      'startDate',
      'endDate',
    ],
  }
}

exports.contactUsEmail = (req, res) => {

  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  } else {

    const { firstName, lastName, email, phone, text, recaptcha } = req.body;
    const template = TEMPLATES[req.body.template || 'contactUs']

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

        if (!template) {
          const error = new Error('Unknown email template');
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
          to: INTERNAL_EMAIL,
          from: `CS Website <noreply@crossfit-secaucus.com>`,
          subject: `${template.internalSubject}: ${firstName || ''} ${lastName || ''}`,
          reply_to: email,
          text: [
            `${text || ''}\n--\n`,
            `${firstName || ''} ${lastName || ''}`,
            email,
            phone || '',
          ].join("\n")
        };

        return sendgrid.send(message);
      })

      .then((sendgridResponse) => {
        if (sendgridResponse.statusCode < 200 || sendgridResponse.statusCode >= 400) {
          const error = Error(sendgridResponse.body);
          error.code = sendgridResponse.statusCode;
          throw error;
        }

        const dynamicTemplateData = {}
        template.dynamicTemplateFields.forEach((field) => {
          if (field in req.body) {
            dynamicTemplateData[field] = req.body[field]
          }
        })

        const message = {
          to: req.body.email,
          from: `CrossFit Secaucus <${INTERNAL_EMAIL}>`,
          reply_to: INTERNAL_EMAIL,
          bcc: INTERNAL_EMAIL,
          subject: template.subject,
          templateId: template.templateId,
          dynamic_template_data: dynamicTemplateData,
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
