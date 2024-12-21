import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App dashed">
      <h1>
        Button Variants
        <hr />
      </h1>
      <button className="" onClick={() => setCount((count) => count + 1)}>
        Button {count}
      </button>
      <button className="icon" onClick={() => setCount((count) => count + 1)}>
        <img src={"sliders.svg"} alt="icon" />
      </button>
      <button
        className="secondary"
        onClick={() => setCount((count) => count + 1)}
      >
        Secondary {count}
      </button>
      <button className="ghost" onClick={() => setCount((count) => count + 1)}>
        Ghost {count}
      </button>
      <button
        className="destructive"
        onClick={() => setCount((count) => count + 1)}
      >
        Destructive {count}
      </button>
      <button
        className="outline"
        onClick={() => setCount((count) => count + 1)}
      >
        Outline {count}
      </button>

      <button
        className="disabled"
        disabled
        onClick={() => setCount((count) => count + 1)}
      >
        Disabled {count}
      </button>

      <button className="link" onClick={() => setCount((count) => count + 1)}>
        Link {count}
      </button>
      <div className="dashed flex flex-col flex-wrap align-center gap-4 flex-grow">
        <h2>
          Small
          <hr />
        </h2>
        <button className="sm" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </button>
        <button
          className="sm icon"
          onClick={() => setCount((count) => count + 1)}
        >
          <img src={"sliders.svg"} alt="icon" />
        </button>
        <button
          className="sm secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Secondary {count}
        </button>
        <button
          className="sm ghost"
          onClick={() => setCount((count) => count + 1)}
        >
          Ghost {count}
        </button>
        <button
          className="sm destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Destructive {count}
        </button>
        <button
          className="sm outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Outline {count}
        </button>

        <button
          className="sm disabled"
          disabled
          onClick={() => setCount((count) => count + 1)}
        >
          Disabled {count}
        </button>

        <button
          className="sm link"
          onClick={() => setCount((count) => count + 1)}
        >
          Link {count}
        </button>
      </div>
      <div className="dashed flex flex-col flex-wrap align-center gap-4 flex-grow">
        <h2>
          Large
          <hr />
        </h2>
        <button className="lg" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </button>
        <button
          className="lg icon"
          onClick={() => setCount((count) => count + 1)}
        >
          <img src={"sliders.svg"} alt="icon" />
        </button>
        <button
          className="lg secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Secondary {count}
        </button>
        <button
          className="lg ghost"
          onClick={() => setCount((count) => count + 1)}
        >
          Ghost {count}
        </button>
        <button
          className="lg destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Destructive {count}
        </button>
        <button
          className="lg outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Outline {count}
        </button>

        <button
          className="lg disabled"
          disabled
          onClick={() => setCount((count) => count + 1)}
        >
          Disabled {count}
        </button>

        <button
          className="lg link"
          onClick={() => setCount((count) => count + 1)}
        >
          Link {count}
        </button>
      </div>
      <div className="dashed flex flex-col flex-wrap align-center gap-4 flex-grow">
        <h2>
          Shape Square
          <hr />
        </h2>
        <button
          className="square"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </button>
        <button
          className="square icon"
          onClick={() => setCount((count) => count + 1)}
        >
          <img src={"sliders.svg"} alt="icon" />
        </button>
        <button
          className="square secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Secondary {count}
        </button>

        <button
          className="square destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Destructive {count}
        </button>
        <button
          className="square outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Outline {count}
        </button>

        <button
          className="square disabled"
          disabled
          onClick={() => setCount((count) => count + 1)}
        >
          Disabled {count}
        </button>
      </div>
      <div className="dashed flex flex-col flex-wrap align-center gap-4 flex-grow">
        <h2>
          Shape Pill
          <hr />
        </h2>
        <button className="pill" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </button>
        <button
          className="pill icon"
          onClick={() => setCount((count) => count + 1)}
        >
          <img src={"sliders.svg"} alt="icon" />
        </button>
        <button
          className="pill secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Secondary {count}
        </button>

        <button
          className="pill destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Destructive {count}
        </button>
        <button
          className="pill outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Outline {count}
        </button>

        <button
          className="pill disabled"
          disabled
          onClick={() => setCount((count) => count + 1)}
        >
          Disabled {count}
        </button>
      </div>
    </div>
  );
}

export default App;
