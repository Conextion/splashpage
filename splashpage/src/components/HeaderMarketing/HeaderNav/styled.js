import styled from 'styled-components';

export const HeaderNavSD = styled.nav`
  font: 16px/19px 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
`;

export const HeaderNavListSD = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HeaderNavItemSD = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const HeaderNavLinkSD = styled.a`
  color: #fff;

  &:hover {
    color: #83FBA4;
  }
`;
