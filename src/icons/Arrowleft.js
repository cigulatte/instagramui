import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Arrowleft = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path d="M12 13v7l-8-8 8-8v7h8v2z" fill={color} />
    </Svg>
  );
};

export default Arrowleft;
