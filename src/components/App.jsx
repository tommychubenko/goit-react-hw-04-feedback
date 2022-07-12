import { Component } from 'react';
import AdditionalData from './statistics';
// import Controls from './controls';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleSetFeddback = ({ name }) => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        {/* <Controls /> */}
        <button
          className="button good"
          name="good"
          onClick={e => {
            this.handleSetFeddback(e.target);
          }}
        >
          Good
        </button>
        <button
          className="button neutral"
          name="neutral"
          onClick={e => {
            this.handleSetFeddback(e.target);
          }}
        >
          Neutral
        </button>
        <button
          className="button bad"
          name="bad"
          onClick={e => {
            this.handleSetFeddback(e.target);
          }}
        >
          Bad
        </button>
        <p className="stat_label">STATISTICS</p>

        {this.state.good || this.state.neutral || this.state.bad > 0 ? (
          <AdditionalData
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <p>No statistics data</p>
        )}
      </div>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Feedback />
    </div>
  );
};
