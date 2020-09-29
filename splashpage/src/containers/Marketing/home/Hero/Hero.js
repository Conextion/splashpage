import React, { useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import { HeroContentSD, HeroSD, HeroWrapImageSD } from './styled';
import animation from './mainAnimation.json';
import Intro from '../../Intro/Intro';

function Hero() {
  const node = useRef();

  const ref = useRef();

  useEffect(() => {
    ref.current.anim.setSubframe(false);
  }, [ref]);

  return (
    <HeroSD ref={node}>
      <HeroContentSD>
        <Intro />
      </HeroContentSD>
      <HeroWrapImageSD>
        <Lottie
          options={{
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animation,
          }}
          isClickToPauseDisabled
          ref={ref}
        />
        {/* <source media="(max-width: 479px)" srcSet={introMobileImage} />
        <source media="(min-width: 480px)" srcSet={decorImage} />
        <HeroImageSD src={decorImage} alt="" /> */}
      </HeroWrapImageSD>
    </HeroSD>
  );
}

export default Hero;
