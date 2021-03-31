import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Addline = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill={color} />
    </Svg>
  );
};

export default Addline;
