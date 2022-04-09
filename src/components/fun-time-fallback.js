import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const FunTimeFallback = () => {
  return <StaticImage src="../images/fun-time-fallback.jpg" alt="fun-time" className="fun-time-animation" />;
};

export default FunTimeFallback;
