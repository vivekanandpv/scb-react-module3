import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((s, p) => {
      return {
        index: s.index + 1,
      };
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <>
        <h4>Counter Component: {this.state.index}</h4>
        <p>{this.props.message}</p>
        <button className='btn btn-primary' onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
