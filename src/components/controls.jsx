const controls = ({ handleSetFeddback }) => {
  return (
    <div>
      <button className="button good" name="good" onClick={handleSetFeddback}>
        Good
      </button>
      <button
        className="button neutral"
        name="neutral"
        onClick={handleSetFeddback}
      >
        Neutral
      </button>
      <button className="button bad" name="bad" onClick={handleSetFeddback}>
        Bad
      </button>
    </div>
  );
};

export default controls;
