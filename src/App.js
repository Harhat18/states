import { useState } from "react";

function App() {
  const [name, setName] = useState("Harun");

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <button onClick={() => setName("Fatma")}>Click</button>
    </div>
  );
}

export default App;
