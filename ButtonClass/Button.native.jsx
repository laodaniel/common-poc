import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Common from './Button.common';

class Button extends Common {
  render() {
    const { index } = this.state;
    return (
      <TouchableOpacity onPress={this.setIndex} style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 50 }}>
        <Text>{index}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
