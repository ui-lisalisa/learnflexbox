import React from 'react';

const MailChimp = () => {
  return (
    <div
      id="mc_embed_signup"
      style={{display: 'flex', justifyContent: 'center'}}>
      <form
        style={{width: '50%'}}
        action="https://matbub.us17.list-manage.com/subscribe/post?u=eb89624098c8ce40b7f3b26ef&amp;id=909f807d9f"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe for updates</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address
              <span className="asterisk">*</span>
            </label>
            <input
              className="form-control required email"
              name="EMAIL"
              id="mce-EMAIL"
              defaultValue=""
              type="email"
              placeholder="Email here"
              aria-label="Repository description"
            />
          </div>
          <div className="mc-field-group input-group">
            <strong>How would you like to receive your emails?</strong>
            <ul style={{marginLeft: '20px'}}>
              <li className="form-checkbox">
                <input
                  type="radio"
                  defaultValue="html"
                  name="EMAILTYPE"
                  id="mce-EMAILTYPE-0"
                />
                <label htmlFor="mce-EMAILTYPE-0">html</label>
              </li>
              <li className="form-checkbox">
                <input
                  type="radio"
                  defaultValue="text"
                  name="EMAILTYPE"
                  id="mce-EMAILTYPE-1"
                />
                <label htmlFor="mce-EMAILTYPE-1">text</label>
              </li>
            </ul>
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{display: 'none'}}></div>
            <div
              className="response"
              id="mce-success-response"
              style={{display: 'none'}}></div>
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailChimp;
