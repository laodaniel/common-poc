import React from 'react';

/* eslint-disable react/no-unused-state */

class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  setIndex = () => {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }
}

export default ButtonClass;
