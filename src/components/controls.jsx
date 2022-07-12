import { Component } from 'react';

class Controls extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleSetFeddback = ({ name }) => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <button
          className="button good"
          name="good"
          onClick={e => {
            handleSetFeddback(e.target);
          }}
        >
          Good
        </button>
        <button
          className="button neutral"
          name="neutral"
          onClick={e => {
            handleSetFeddback(e.target);
          }}
        >
          Neutral
        </button>
        <button
          className="button bad"
          name="bad"
          onClick={e => {
            handleSetFeddback(e.target);
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default Controls;
