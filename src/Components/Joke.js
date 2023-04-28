import React from "react";

const Joke = ({ joke }) => {
  const { type, setup, delivery, joke: text } = joke;

  return (
    <div className="joke">
      {type === "single" && <p>{text}</p>}
      {type === "twopart" && (
        <>
          <p>{setup}</p>
          <p>{delivery}</p>
        </>
      )}
    </div>
  );
};

export default Joke;
