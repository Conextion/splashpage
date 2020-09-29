import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderGeneralActionSD,
  HeaderGeneralButtonSD,
  HeaderNavLinkSD,
  HeaderGeneralLogoSD,
  HeaderGeneralNavSD,
  HeaderGeneralSD,
  HeaderGeneralToggleSD,
  HeaderGeneralWrapLogoSD,
  HeaderGeneralWrapToggleSD,
} from './styled';
import HeaderNav from './HeaderNav/HeaderNav';
import MobileMenu from './MobileMenu/MobileMenu';

const defaultProps = {
  isTestingPage: false,
};

const propTypes = {
  isTestingPage: PropTypes.bool,
};

function HeaderMarketing({isTestingPage}) {
  const [isOpenMobileMenu, toggleMobileMenu] = useState(false);
  const homeLink = '/';

  const getHref = () => {
    
  };

  const onClick = () => {
    

    return null;
  };


  return (
    <HeaderGeneralSD>
      
      <HeaderGeneralWrapLogoSD>
        <HeaderGeneralLogoSD to={homeLink} />
      </HeaderGeneralWrapLogoSD>

      <HeaderGeneralNavSD>
        <HeaderNav isTestingPage={isTestingPage} />
      </HeaderGeneralNavSD>

      {/* <HeaderGeneralActionSD>
        <HeaderGeneralButtonSD>
          <HeaderNavLinkSD href={"https://app.conextion.com/"} onClick={onClick}>Sign Up</HeaderNavLinkSD>
        </HeaderGeneralButtonSD>
      </HeaderGeneralActionSD> */}

      {isOpenMobileMenu && (
      <MobileMenu onClose={() => toggleMobileMenu(false)} isTestingPage={isTestingPage} />
      )}
    </HeaderGeneralSD>
  );
}

HeaderMarketing.defaultProps = defaultProps;
HeaderMarketing.propTypes = propTypes;
export default HeaderMarketing;
