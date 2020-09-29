import styled from 'styled-components';
import breakpoints from '../../../../helpers/breakpoints';

export const HeroSD = styled.section`
  display: flex;
  padding-left: 4.44%;

  ${breakpoints.down('sm')} {
    display: block;
    padding-left: 0;
  }
`;

export const HeroContentSD = styled.div`
  flex: 5.4;
  margin: 164px 30px 294px 0;

  ${breakpoints.down('sm')} {
    margin: 80px 0 0;
    padding-left: 4.44%;
  }

  ${breakpoints.down('xs')} {
    margin-top: 31px;
    padding: 0 10px;
  }
`;

export const HeroWrapImageSD = styled.picture`
  flex: 8.06;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  margin-top: 50px;
`;

export const HeroImageSD = styled.img`
  ${breakpoints.down(480)} {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
