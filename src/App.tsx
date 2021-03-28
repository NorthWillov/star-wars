import "./App.css";
import List from "./components/List";
import logo from "./starwars.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <List />
    </div>
  );
}

export default App;
