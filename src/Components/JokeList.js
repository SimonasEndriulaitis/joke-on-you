import React, { useState, useEffect } from "react";
import Joke from "./Joke";

const JokeList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes));
  }, []);

  return (
    <div className="joke-list">
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
