import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="main">
      <div className="page1">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
