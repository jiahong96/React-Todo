import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./scss/styles.scss";
import "bootstrap";
import TodoBody from "./components/TodoBody";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContext.Provider value={{ id: 1, name: "Admin" }}>
        <h1 className="d-flex align-items-center">
          <div>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <span>To Do App (Vite + React)</span>
        </h1>

        <TodoBody className="mt-3" />
      </UserContext.Provider>
    </>
  );
}

export default App;
