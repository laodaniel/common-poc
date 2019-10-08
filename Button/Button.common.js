import { useState } from 'react';

export default () => {
  const [index, setIndex] = useState(0);
  return {
    index,
    setIndex: () => setIndex(index + 1),
  };
};
