import React from 'react';

const MailChimp = () => {
  return (
    <div id="mc_embed_signup">
      <form
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
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group input-group">
            <strong>Email Format </strong>
            <ul>
              <li>
                <input
                  type="radio"
                  defaultValue="html"
                  name="EMAILTYPE"
                  id="mce-EMAILTYPE-0"
                />
                <label htmlFor="mce-EMAILTYPE-0">html</label>
              </li>
              <li>
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
