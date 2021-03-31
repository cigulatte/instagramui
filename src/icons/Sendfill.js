import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Sendingfill = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        fill={color}
      />
    </Svg>
  );
};

export default Sendingfill;
