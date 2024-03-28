import { useState, useEffect } from "react";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen pt-20">
      <Header />
      <Main />
    </div>
  );
}

export default App;
