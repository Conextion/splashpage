import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import breakpoints from '../../../helpers/breakpoints';
import Next from '../../../assets/images/Next.svg';

export const IntroSD = styled.div`
  max-width: 540px;
`;

export const IntroTitleSD = styled.div`
  margin-bottom: 27px;
  color: #2d3b3b;
  font: 500 64px/1 'Founders Grotesk', sans-serif;

  ${breakpoints.down('xs')} {
    margin-bottom: 31px;
    font-size: 40px;
  }
`;

export const IntroDescriptionSD = styled.div`
  margin-bottom: 25px;
  color: #6a7c7b;
  font: 24px/41px 'Founders Grotesk', sans-serif;

  ${breakpoints.down('xs')} {
    max-width: 350px;
    margin-bottom: 18px;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 23px;
  }
`;

export const InlineLinkSD = styled.a`

  font: 24px/41px 'Founders Grotesk', sans-serif;
  padding: 0 5px;
  color: #00908A;
  text-decoration: none;

  &:hover {
    color: #004B48;
    text-decoration: underline;
  }
  ${breakpoints.down('xs')} {
    max-width: 350px;
    margin-bottom: 18px;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 23px;
  }
  
`;

export const IntroLinkSD = styled.a`
  margin-top: 25px;
  color: #00908A;
  font: 24px/41px 'Founders Grotesk', sans-serif;
  text-decoration: none;

  &:hover {
    color: #004B48;
    text-decoration: underline;
  }
  ${breakpoints.down('xs')} {
    max-width: 350px;
    margin-bottom: 18px;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 23px;
  }
`;

export const IntroArrowSD = styled.span`
  background: url('${Next}') right 0 top 0 no-repeat;
  width: 22px;
  height: 25px;
  position: absolute;
  padding-left: 12px;
  margin-top: 10px;
  ${breakpoints.down('xs')} {
    margin-top: 0px;
  }
`;


