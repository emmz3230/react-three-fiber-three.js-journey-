import React, { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState();
  const getPeople = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const result = response.json();

    setPeople(result);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
