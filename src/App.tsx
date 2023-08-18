import reactLogo from "./assets/react.svg";
import "./App.css";
import "./scss/styles.scss";
import "bootstrap";
import TodoBody from "./components/TodoBody";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [resetKey, setResetKey] = useState(0);
  const user = { id: 1, name: "Admin" };

  return (
    <UserContext.Provider value={user}>
      <h1 className="d-flex align-items-center">
        <div>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <span>To Do App (Vite + React)</span>
      </h1>

      {/* to test if re-render triggers useMemo */}
      <button
        className="btn btn-primary"
        onClick={() => setResetKey((currentVal) => currentVal + 1)}
      >
        Reset List
      </button>
      <TodoBody className="mt-3" key={resetKey} />
    </UserContext.Provider>
  );
}

export default App;
