import { useState } from 'react';
import AdditionalData from './statistics';
import Controls from './controls';

const Feedback = () => {
  const [counter, setCounter] = useState({ good: 0, neutral: 0, bad: 0 });
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // class Feedback extends Component {

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleSetFeddback = ({ name }) => {
    setCounter(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <div>
      <Controls
        handleSetFeddback={e => {
          handleSetFeddback(e.target);
        }}
      />
      <p className="stat_label">STATISTICS</p>

      {counter.good || counter.neutral || counter.bad > 0 ? (
        <AdditionalData
          good={counter.good}
          neutral={counter.neutral}
          bad={counter.bad}
        />
      ) : (
        <p>No statistics data</p>
      )}
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Feedback />
    </div>
  );
};
