import { useState } from "react";
import "./App.css";
import Libros from "./Components/Libros/Libros";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative bg-gray-50">
      <Libros />
    </div>
  );
}

export default App;
