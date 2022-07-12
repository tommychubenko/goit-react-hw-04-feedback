const getAdditionalInfo = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {good + neutral + bad}</p>
      <p>
        Percent of positive FeedBacks:{' '}
        {Math.round((good / (good + neutral + bad)) * 100)}%
      </p>
    </div>
  );
};

export default getAdditionalInfo;
