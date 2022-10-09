import { useState } from "react";

function App() {
  const [name, setName] = useState("Harun");
  const [age, setAge] = useState("30");
  const [friends, setFriends] = useState(["Ali", "Mehmet"]);
  const [address, setAddress] = useState({ title: "Aydın", zip: "09002" });
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Fatma")}>change name</button>
      <button onClick={() => setAge("29")}>change age</button>

      <hr />
      <br></br>
      <h2>FRİENDS</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Hüseyin"])}>
        Add New Friend
      </button>

      <hr />
      <br></br>

      <h2>Address </h2>
      <div>
        {address.title} {address.zip}{" "}
      </div>
      <br></br>
      <button
        onClick={() =>
          setAddress({ ...address, title: "İstanbul", zip: "340277" })
        }
      >
        Change the address
      </button>
    </div>
  );
}

export default App;
