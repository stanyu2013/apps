import './App.css';
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Items from "./components/Items";

function App() {    
  return (
    <div className="App">
      <Navbar/>
      <Categories/>
      <Items/>
    </div>
  );
}

export default App;
