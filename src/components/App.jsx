import { Component } from 'react';
import AdditionalData from './statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getAdditionalInfo() {
    return (
      <div>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total feedbacks: {this.countTotalFeedback()}</p>
        <p>
          Percent of positive FeedBacks:{' '}
          {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  render() {
    return (
      <div>
        <button
          className="button good"
          onClick={() => {
            this.setState({ good: this.state.good + 1 });
            console.log(this.state);
          }}
        >
          Good
        </button>
        <button
          className="button neutral"
          onClick={() => {
            this.setState({ neutral: this.state.neutral + 1 });
            console.log(this.state);
          }}
        >
          Neutral
        </button>
        <button
          className="button bad"
          onClick={() => {
            this.setState({ bad: this.state.bad + 1 });
            console.log(this.state);
          }}
        >
          Bad
        </button>
        <p className="stat_label">STATISTICS</p>

        {this.state.good || this.state.neutral || this.state.bad > 0 ? (
          this.getAdditionalInfo()
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
      <AdditionalData
        good={Feedback.state.good}
        neutral={Feedback.state.neutral}
        bad={Feedback.state.bad}
      />
    </div>
  );
};
