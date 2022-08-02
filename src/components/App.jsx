import { useState } from 'react';
import AdditionalData from './statistics';
import Controls from './controls';

const Feedback = () => {
  const [counter, setCounter] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleSetFeddback = name => {
    setCounter(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <div>
      <Controls handleSetFeddback={handleSetFeddback} buttons={counter} />
      <AdditionalData props={counter} />
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
