import { useState } from 'react';

const useHook = ({ initial = 0, uperBound }) => {
  const [count, setCount] = useState(initial);

  const incBtn = () => {
    if (count < uperBound) {
      setCount(count + 1);
    }
  };
  const decBtn = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return {
    count,
    incBtn,
    decBtn,
  };
};

export default useHook;
