import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import common from './Button.common';

const Button = () => {
  const { index, setIndex } = common();
  return (
    <TouchableOpacity onPress={setIndex} style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 50 }}>
      <Text>{index}</Text>
    </TouchableOpacity>
  );
};

export default Button;
