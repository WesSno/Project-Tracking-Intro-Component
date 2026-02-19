import { useState } from "react";
import NavigationBar from "./components/Header";
import Main from "./components/Content";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="box-bg"></div>
      <Main />
    </div>
  );
}

export default App;
