import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Nav } from './compnents/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
