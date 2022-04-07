import React from 'react';
import Rive from 'rive-react';

import animation from './fun-time.riv';

const FunTime = ({ className }) => {
  return <Rive src={animation} className={className} />;
};

// const FunTime = () => {
//   const { RiveComponent } = useRive({
//     src: animation,
//     autoplay: false
//   });

//   return <RiveComponent className="fun-time-animation" />;
// };

export default FunTime;
