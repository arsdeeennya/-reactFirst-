import logo from './logo.svg';
import './App.css';
import DrfApiFetch from "./components/DrfApiFetch"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DrfApiFetch/>
      </header>
    </div>
  );
}

export default App;
