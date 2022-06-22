import logo from './logo.svg';
import './scss/main.css';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
