import styled from 'styled-components';

import logoImg from '../../../assets/svg/conextion.svg';

export const MobileMenuSD = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 87px 20px 20px;
  background-color: #00211f;
`;

export const MobileMenuWrapCloseIconSD = styled.div`
  position: absolute;
  top: 13px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
`;

export const MobileMenuCloseIconSD = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

export const MobileMenuListSD = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
`;

export const MobileMenuItemSD = styled.li`
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

export const MobileMenuLinkSD = styled.a`
  color: #fff;
  font: 18px/23px 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;

  &:hover {
    color: #ff7f7a;
  }
`;

export const MobileMenuSignUpSD = styled.a`
  padding: 6px 13px;
  margin-bottom: 40px;
  border-radius: 2px;
  background: ${({ theme }) => theme.btnColor};
  color: #fff;
  font: bold 14px/18px 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.btnColorHover};
    color: #fff;
  }
`;

export const MobileMenuLogoSD = styled.div`
	display: inline-block;
	width: 200px;
	height: 24px;
	margin-bottom: 29px;
	background: url("${logoImg}") 0 0 no-repeat;
	background-size: cover;
`;

export const MobileMenuSocialsSD = styled.div``;
