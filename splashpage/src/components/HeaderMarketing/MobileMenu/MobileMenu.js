import React from 'react';
import PropTypes from 'prop-types';
import {
  MobileMenuCloseIconSD,
  MobileMenuItemSD,
  MobileMenuLinkSD,
  MobileMenuListSD,
  MobileMenuLogoSD,
  MobileMenuSD,
  MobileMenuSignUpSD,
  MobileMenuSocialsSD,
  MobileMenuWrapCloseIconSD,
} from './styled';
import { HEADER_MOBILE_NAV_ITEMS } from '../constants';
import closeIcon from '../../../assets/svg/closeHamburgerIcon.svg';

const defaultProps = {
  onClose: () => null,
  isTestingPage: false,
};

const propTypes = {
  onClose: PropTypes.func,
  isTestingPage: PropTypes.bool,
};

function MobileMenu({ onClose, isTestingPage }) {
  const rebuildedMobileNavItems = HEADER_MOBILE_NAV_ITEMS.map((item) => {
    if (!isTestingPage && item.title === 'Login') {
      return null;
    }

    return item;
  }).filter(item => item);

  return (
    <MobileMenuSD>
      <MobileMenuWrapCloseIconSD onClick={onClose}>
        <MobileMenuCloseIconSD src={closeIcon} alt="close" />
      </MobileMenuWrapCloseIconSD>

      <MobileMenuListSD>
        {rebuildedMobileNavItems.map(({ title, to }) => (
          <MobileMenuItemSD key={to}>
            <MobileMenuLinkSD to={to} onClick={onClose}>
              {title}
            </MobileMenuLinkSD>
          </MobileMenuItemSD>
        ))}
      </MobileMenuListSD>
      <MobileMenuLogoSD />
    </MobileMenuSD>
  );
}

MobileMenu.propTypes = propTypes;
MobileMenu.defaultProps = defaultProps;
export default MobileMenu;
