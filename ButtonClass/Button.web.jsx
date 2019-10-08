import React from 'react';
import Common from './Button.common';

class Button extends Common {
  render() {
    const { index } = this.state;
    return (
      <button type="button" onClick={this.setIndex}>
        {index}
      </button>
    );
  }
}
export default Button;
