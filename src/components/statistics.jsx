const getAdditionalInfo = ({ props }) => {
  return (
    props && (
      <div>
        <p className="stat_label">STATISTICS</p>
        {props.good || props.neutral || props.bad > 0 ? (
          <div>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>Total feedbacks: {props.good + props.neutral + props.bad}</p>
            <p>
              Percent of positive FeedBacks:{' '}
              {Math.round(
                (props.good / (props.good + props.neutral + props.bad)) * 100
              )}
              %
            </p>
          </div>
        ) : (
          <p>No statistics data</p>
        )}
      </div>
    )
  );
};

export default getAdditionalInfo;
