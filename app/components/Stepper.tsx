import React, { useState } from 'react';

interface StepperProps {
  initialCount?: number;
  onChange?: (newCount: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ initialCount = 0, onChange }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
  };

  return (
    <div>
      <button data-cy="decrement" onClick={decrement}>-</button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={increment}>+</button>
    </div>
  );
};

export default Stepper;
