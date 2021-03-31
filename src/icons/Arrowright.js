import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Arrowright = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill={color}
      />
    </Svg>
  );
};

export default Arrowright;
