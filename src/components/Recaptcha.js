import React from 'react';
import PropTypes from 'prop-types';

class Recaptcha extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.formVersion !== this.props.formVersion) {
      grecaptcha.reset(this._id);
    }
  }

  componentDidMount() {
    const clearRecaptcha = (v) => {
      this.props.onRecaptchaChange(null);
      grecaptcha.reset(this._id);
    };

    const i = setInterval(() => {
      if (typeof grecaptcha !== 'undefined') {
        clearInterval(i);
        this._id = grecaptcha.render(this.props.id, {
          sitekey: this.props.sitekey,
          callback: this.props.onRecaptchaChange,
          'expired-callback': clearRecaptcha,
          'error-callback': clearRecaptcha,
        });
      }
    }, 500);
  }

  render() {
    return (
      <div id={this.props.id} style={{ height: 100, marginLeft: 15 }} />
    );
  }
}

Recaptcha.propTypes = {
  id: PropTypes.string.isRequired,
  sitekey: PropTypes.string.isRequired,
  onRecaptchaChange: PropTypes.func.isRequired,
};

export default Recaptcha;
