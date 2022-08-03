import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>Clear all</button>
      </div>
    </main>
  );
}

export default App;
