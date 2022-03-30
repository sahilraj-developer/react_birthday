import React, { useState } from "react";
import { data } from "./birthday-data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);


  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };
  return (
    <div className="App">
      <h3 style={{color: " rgb(23, 180, 88)", textAlign: "center",fontSize: "36px", background: "#fff", }} >
        {people.length} Birthday Today
      </h3>
      <button className="btn" onClick={() => setPeople(data)}>
        Restore Data
      </button>
      {people.map((person) => {
      
        return (
          <div className="container" key={person.id}>
            <div className="avatar">
              <div>
                <img src={person.image} alt="" />
              </div>

              <div>
                <h3>{person.name}</h3>
              </div>
            </div>
            <div className="button">
              <button className="btn" onClick={() => removePerson(person.id)}>
                Dismiss
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
