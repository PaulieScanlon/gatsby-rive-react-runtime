import React from 'react';
import Rive from 'rive-react';

import animation from './fun-time.riv';

const FunTime = () => {
  return <Rive src={animation} className="fun-time-animation" />;
};

export default FunTime;
