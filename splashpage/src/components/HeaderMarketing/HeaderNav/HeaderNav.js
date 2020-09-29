import React from 'react';
import {
  HeaderNavItemSD,
  HeaderNavLinkSD,
  HeaderNavListSD,
  HeaderNavSD,
} from './styled';
import { HEADER_NAV_ITEMS } from '../constants';

function HeaderNav() {
  return (
    <HeaderNavSD>
      <HeaderNavListSD>
        {HEADER_NAV_ITEMS.map(({ to, title }) => (
          <HeaderNavItemSD key={to}>
            <HeaderNavLinkSD to={to}>{title}</HeaderNavLinkSD>
          </HeaderNavItemSD>
        ))}
      </HeaderNavListSD>
    </HeaderNavSD>
  );
}

export default HeaderNav;
