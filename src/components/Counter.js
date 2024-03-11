import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 10});
  }


  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increases by 10</button>
    </main>
  );
};

export default Counter;
