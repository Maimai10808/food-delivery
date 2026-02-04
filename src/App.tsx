import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { setupLenis } from "./animation/lenis";

function App() {
  useEffect(() => {
    const { destroy } = setupLenis();
    return () => destroy();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
