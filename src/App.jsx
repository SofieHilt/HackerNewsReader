import { useState, useEffect } from "react";
import Main from "./components/Main.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen">
      <Main />
    </div>
  );
}

export default App;
