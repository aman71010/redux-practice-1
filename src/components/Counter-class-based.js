import { Component } from "react";

import classes from './Counter.module.css';
import { connect } from "react-redux";

class Counter extends Component {

  incrementHandler = () => {
    this.props.increment();
  }

  decrementHandler = () => {
    this.props.decrement();
  }

  increaseHandler = () => {
    this.props.increase();
  }

  toggleCounterHandler = () => {
    this.props.toggle();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.show && <div className={classes.value}>{this.props.counter}</div>}
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.increaseHandler.bind(this)}>Increases by 20</button>
      </main>
    );
  }
};

const mapStateToProps = state => {
  return {
    counter: state.counter,
    show: state.showCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
    increase: () => dispatch({type: 'increase', amount: 20}),
    toggle: () => dispatch({type: 'toggle'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);