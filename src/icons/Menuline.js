import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Menuline = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill={color} />
    </Svg>
  );
};

export default Menuline;
