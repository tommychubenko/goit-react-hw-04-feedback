import { nanoid } from 'nanoid';

const controls = ({ handleSetFeddback, buttons }) => {
  return (
    buttons && (
      <div>
        {Object.keys(buttons).map(button => {
          return (
            <button
              key={nanoid(3)}
              className={`button ${button}`}
              name={button}
              onClick={() => {
                handleSetFeddback(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
    )
  );
};

export default controls;
