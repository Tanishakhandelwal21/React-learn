import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Tanisha",
    age: 21,
  };
  let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card
        userName="tanisha"
        btnTxt="visit me!"
        detail="Software developer"
        obj={myArr}
      />
      <Card userName="vishu" btnTxt="click me!" detail="Data Scientist" />
    </>
  );
}

export default App;
