import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { ChevronRight, Dumbbell, MailOpen } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <h2>Standard</h2>

      <div className="flex gap-3 flex-wrap  border-2 p-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          variant="destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button variant="link" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </Button>
        <Button variant="link" onClick={() => setCount((count) => count + 1)}>
          <MailOpen /> {count} Email
        </Button>
        <Button
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="flex gap-3 flex-wrap  border-2 p-4">
        <Button shape="pill" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </Button>
        <Button>Elma</Button>
        <Button variant="ourline">Elma</Button>
        <Button shape="pill">Elma</Button>
        <Button shape="square">Elma</Button>
        <Button size="lg">Elma</Button>
        <Button>Elma</Button>
        <Button>Elma</Button>
        <Button
          variant="secondary"
          shape="pill"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>
        <Button
          variant="destructive"
          shape="pill"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>
        <Button
          variant="outline"
          shape="pill"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          shape="pill"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          shape="pill"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          <MailOpen /> {count} Email
        </Button>
        <Button
          variant="outline"
          shape="pill"
          onClick={() => setCount((count) => count + 1)}
        >
          <ChevronRight />
        </Button>
        <Button shape="pill" onClick={() => setCount((count) => count + 1)}>
          <ChevronRight />
        </Button>
      </div>

      <div className="flex gap-3 flex-wrap  border-2 p-4">
        <h2>Large</h2>
        <Button size="lg" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="lg"
          variant="destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="lg"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>
        <Button
          size="lg"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          <MailOpen /> {count} Email
        </Button>
        <Button size="lg" onClick={() => setCount((count) => count + 1)}>
          <ChevronRight />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="flex gap-3 flex-wrap border-2 p-4">
        <h2>Small</h2>
        <Button size="sm" onClick={() => setCount((count) => count + 1)}>
          Button {count}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>

        <Button
          size="sm"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          Button {count}
        </Button>
        <Button
          size="sm"
          variant="link"
          onClick={() => setCount((count) => count + 1)}
        >
          <MailOpen /> {count} Email
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          <ChevronRight />
        </Button>
        <Button size="sm" onClick={() => setCount((count) => count + 1)}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default App;
