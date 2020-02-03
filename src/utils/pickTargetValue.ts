import React from 'react';

const pickTargetValue = (event: React.ChangeEvent<{ value: unknown }>) =>
  event.target.value;

export default pickTargetValue;
