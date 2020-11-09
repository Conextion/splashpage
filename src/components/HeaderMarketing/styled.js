import styled from 'styled-components';

import logoImg from '../../assets/svg/conextion.svg';
import breakpoints from '../../helpers/breakpoints';
import burgerMenuIcon from '../../assets/svg/gamburger.svg';

import headerBgImage from '../../assets/svg/authHeaderBg.svg';

export const HeaderGeneralSD = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  margin: 15px 15px 0;
  padding-left: 48px;
  padding-right: 12px;

  border-radius: 4px;
  
  background: url('${headerBgImage}') right 85px top 0 no-repeat, #00211f;

  ${breakpoints.down('xs')} {
    height: 54px;
    padding-left: 5px;
    padding-right: 10px;
    margin: 0;
    border-radius: 0;
    background: #00211f;
  }
`;

export const HeaderGeneralWrapLogoSD = styled.div`
  margin-right: 48px;

  ${breakpoints.down('xs')} {
    margin-right: 0;
    margin-left:20px;
  }
`;

export const HeaderGeneralLogoSD = styled.a`
	display: inline-block;
	width: 134px;
	height: 16px;
	background: url("${logoImg}") 0 0 no-repeat;
	background-size: 100%;
`;

export const HeaderGeneralNavSD = styled.div`
  ${breakpoints.down('xs')} {
    display: none;
  }
`;

export const HeaderGeneralActionSD = styled.div`
  margin-left: auto;
`;

export const HeaderGeneralLoginSD = styled.a`
  margin-right: 50px;
  color: #fff;
  font: bold 18px/1 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;

  &:hover {
    color: #ff7f7a;
  }

  ${breakpoints.down('sm')} {
    margin-right: 30px;
  }

  ${breakpoints.down('xs')} {
    margin-right: 20px;
    font-size: 15px;
    line-height: 18px;
  }

  ${breakpoints.down('375')} {
    margin-right: 5px;
  }
`;

export const HeaderGeneralButtonSD = styled.button`
  && {
    border: none;
    outline: none;
    flex: 0 0 auto;
    padding: 11px 31px;
    margin: 0;
    border-radius: 2px;
    background: #ff7f7a;
    color: #fff;
    font: bold 18px/18px 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;

    &:hover {
      background-color: #3a0807;
    }

    ${breakpoints.down('xs')} {
      padding: 6px 13px;
      font-size: 14px;
    }
  }
`;

export const HeaderGeneralWrapToggleSD = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  margin-right: 15px;

  ${breakpoints.down('xs')} {
    display: flex;
  }

  ${breakpoints.down('375')} {
    margin-right: 5px;
  }
`;

export const HeaderGeneralToggleSD = styled.div`
  width: 21px;
  height: 16px;
  background: url("${burgerMenuIcon}") 0 0 no-repeat;
`;
export const HeaderNavLinkSD = styled.a`
  color: #fff;
  text-decoration: none;
`;
