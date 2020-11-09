import React from 'react';
import PropTypes from 'prop-types';

import {
  IntroDescriptionSD,
  IntroSD,
  IntroTitleSD,
  IntroLinkSD,
  InlineLinkSD,
  IntroArrowSD
} from './styled';

function Intro() {

  return (
    <IntroSD>
      <IntroTitleSD>Coming Soon!</IntroTitleSD>
      <IntroDescriptionSD>Conextion is currently in private beta. Don't have a password?
        <InlineLinkSD href="mailto:hello@conextion.com">Contact us</InlineLinkSD>
        for more information.
         <br />


        <div className="sendgrid-subscription-widget widget-1667" data-emailerror="Please enter a valid email address" data-nameerror="Please enter your name" data-checkboxerror="Please tick the box to accept our conditions">
          <form className="sg-widget" data-token="e424d4f824fce2908b3aa0eb304dc9b0" onsubmit="return false;">
            <p>Enter your email and we'll put you on our invite list.</p>
            <div className="leftWrapper">
              <label>
                <div className="inputWrapper">
                  <input className="sg_email" type="email" name="sg_email" placeholder="you@example.com" required="required" />
                </div>
              </label>
            </div>
            <button type="submit" className="sg-submit-btn" id="widget-1667" value="Subscribe">Submit</button>
            <div className="sg-response"></div>
          </form>
        </div>

      </IntroDescriptionSD>
      <IntroLinkSD href="https://app.conextion.com/">Enter Site <IntroArrowSD></IntroArrowSD></IntroLinkSD>
    </IntroSD>
  );
}

Intro.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  description: PropTypes.string.isRequired,
};

export default Intro;
