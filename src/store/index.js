import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
}

const counterReducer = (state=initialState, action) => {
  if(action.type === 'increment') {
    return {
      counter: state.counter+1,
      showCounter: state.show
    }
  }
  if(action.type === 'decrement') {
    return {
      counter: state.counter-1,
      showCounter: state.show
    }
  }

  if(action.type === 'increase') {
    return {
      counter: state.counter+action.amount,
      showCounter: state.show
    }
  }

  if(action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }
  return state;
}

export const store = createStore(counterReducer);