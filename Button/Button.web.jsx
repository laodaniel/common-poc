import React from 'react';
import common from './Button.common';

export default () => {
  const { index, setIndex } = common();
  return (
    <button type="button" onClick={setIndex}>
      {index}
    </button>
  );
};
