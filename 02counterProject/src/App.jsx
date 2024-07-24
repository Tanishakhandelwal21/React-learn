import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("value added", counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("value removed", counter);
    }
  };
  return (
    <>
      <h1>Tanisha Khandelwal</h1>
      <h2>counter value :{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <p>footer :{counter}</p>
    </>
  );
}

export default App;
