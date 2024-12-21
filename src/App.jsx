import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((count) => count + 1);

  const ButtonSection = ({ title, className = "", buttons }) => (
    <div className="dashed flex flex-col flex-wrap align-center gap-4 flex-grow">
      <h2>
        {title}
        <hr />
      </h2>
      {buttons.map((btnProps, index) => (
        <button
          key={index}
          {...btnProps}
          className={`${className} ${btnProps.className || ""}`}
          onClick={btnProps.disabled ? undefined : handleIncrement}
        >
          {btnProps.icon ? (
            <img src="sliders.svg" alt="icon" />
          ) : (
            btnProps.children || `Button ${count}`
          )}
        </button>
      ))}
    </div>
  );

  const defaultButtons = [
    {},
    { className: "secondary" },
    { className: "ghost" },
    { className: "destructive" },
    { className: "outline" },
    { className: "disabled", disabled: true },
    { className: "link" },
  ];

  return (
    <div className="App dashed">
      <h1>
        Button Variants
        <hr />
      </h1>
      {defaultButtons.map((btnProps, index) => (
        <button
          key={index}
          {...btnProps}
          onClick={btnProps.disabled ? undefined : handleIncrement}
        >
          {btnProps.icon ? (
            <img src="sliders.svg" alt="icon" />
          ) : (
            btnProps.children || `Button ${count}`
          )}
        </button>
      ))}

      <ButtonSection title="Small" className="sm" buttons={defaultButtons} />
      <ButtonSection title="Large" className="lg" buttons={defaultButtons} />
      <ButtonSection
        title="Shape Square"
        className="square"
        buttons={defaultButtons.slice(0, 6)}
      />
      <ButtonSection
        title="Shape Pill"
        className="pill"
        buttons={defaultButtons.slice(0, 6)}
      />
    </div>
  );
}

export default App;
