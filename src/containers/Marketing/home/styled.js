import styled from 'styled-components';
import breakpoints from '../../../helpers/breakpoints';

export const HomeGeneralSD = styled.div`
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 100%;
  }

  &::after {
    z-index: -2;
    background: #fafbfb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }

  &::before {
    z-index: -1;
    background: #f6f7f7;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }

  ${breakpoints.down('xs')} {
    &::after {
      top: 182px;
      background: #f6f7f7;
      clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }

    &::before {
      padding-bottom: 0;
      height: 182px;
      clip-path: none;
    }
  }
`;

export const HomeGeneralGroupProductsPurchaseSD = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    top: 59px;
    bottom: -53px;
    left: -100px;
    display: block;
    width: 167%;
    background: #e5f4f3;
    transform: matrix(-1, 0.09, 0.09, 1, 0, 0);
  }

  ${breakpoints.down('xs')} {
    &::after {
      top: 100px;
      left: -34%;
      bottom: -124px;
    }
  }
`;

export const HomeGeneralPurchaseSD = styled.div`
  padding-top: 48.18px;
  padding-bottom: 48px;

  ${breakpoints.down('xs')} {
    padding-top: 0;
  }
`;

export const HomeGeneralSellSD = styled.div`
  position: relative;
  padding-top: 203.8px;
  padding-bottom: 165px;

  &:after {
    content: '';
    position: absolute;
    z-index: -3;
    top: -100px;
    bottom: 10px;
    left: -30%;
    display: block;
    width: 160%;
    background-color: #e8d5d4;
    transform: rotate(5deg);
  }

  ${breakpoints.down('xs')} {
    padding-top: 178px;
    padding-bottom: 95px;
  }
`;

export const HomeGeneralFulfillmentSD = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: -3;
    top: 90px;
    bottom: 0;
    left: -25%;
    display: block;
    width: 150%;
    background: #00908a;
    transform: rotate(-5deg);
  }

  ${breakpoints.down('xs')} {
    &::after {
      top: 8px;
    }
  }
`;

export const HomeGeneralGetInTouchSD = styled.div``;

export const HomeGeneralFooterSD = styled.footer`
  position: relative;
`;

export const HomeGeneralFooterDecorSD = styled.div`
  position: absolute;
  z-index: -1;
  top: -7px;
  bottom: -1500px;
  left: -28%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 158%;
  background: #004b48;
  transform: rotate(5deg);
  overflow: hidden;
`;

export const HomeGeneralWrapMapSD = styled.div`
  left: -81px;
  top: -260px;
  position: relative;

  ${breakpoints.down('768')} {
    height: 921px;
  }
`;

export const HomeGeneralMapSD = styled.img`
  ${breakpoints.down('xs')} {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
