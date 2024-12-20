import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button className="" onClick={() => setCount((count) => count + 1)}>
        Button {count}
      </button>
      <button
        className="secondary"
        onClick={() => setCount((count) => count + 1)}
      >
        Button {count}
      </button>
      <button className="ghost" onClick={() => setCount((count) => count + 1)}>
        Button {count}
      </button>
      <button
        className="outline"
        onClick={() => setCount((count) => count + 1)}
      >
        Outline {count}
      </button>
    </div>
  );
}

export default App;
