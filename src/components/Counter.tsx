import { FC } from "react";

interface CounterInterface {
  value: any;
  onIncrement: any;
  onDecrement: any;
  onIncrementAsync: any;
}

const Counter: FC<CounterInterface> = ({
  value,
  onDecrement,
  onIncrement,
  onIncrementAsync,
}) => {
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
