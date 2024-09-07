import { useState } from "react";
import ListOfThings from "./demo_1";
import Signin from "./demo_2";
import LoginForm from "./demo_3";
import ActivoInactivo from "./demoToggle";
import Semaforo from "./semaforo";
import Coche from "./coche";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const aumentar = () => {
    setCount((prev) => prev + 1);
    setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h3>
        Aprendiendo el Hooks useState <hr />
      </h3>
      <p>Valor {count}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Aumentar {count}
        </button>
        <button onClick={aumentar}>Aumentado</button>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={reset}>Resetear</button>

        <button
          onClick={() => {
            setCount(-1);
          }}>
          {" "}
          Decrement{" "}
        </button>
        <button
          onClick={() => {
            setCount(1);
          }}>
          {" "}
          Increment{" "}
        </button>
      </div>
      <hr />
      <ListOfThings />
      <hr />
      <Signin />
      <hr />
      <LoginForm />
      <hr />
      <ActivoInactivo></ActivoInactivo>
      <hr />
      <Semaforo />
      <hr />
      <Coche />
    </>
  );
}

export default App;
