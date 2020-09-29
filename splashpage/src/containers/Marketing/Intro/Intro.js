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
