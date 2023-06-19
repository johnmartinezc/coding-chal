import './App.css';
import NavBar from './Components/NavBar';
import Counter from './Components/Counter';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;