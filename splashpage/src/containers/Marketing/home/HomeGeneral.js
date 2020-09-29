import React, { useEffect, useRef } from 'react';
import HeaderMarketing from '../../../components/HeaderMarketing/HeaderMarketing';
import {
  HomeGeneralSD,
} from './styled';
import Hero from './Hero/Hero';


const HomeGeneral = () => {

  return (
    <HomeGeneralSD>
      <HeaderMarketing />
      <Hero />

      
    </HomeGeneralSD>
  );
};

export default HomeGeneral;
