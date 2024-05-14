import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from "./pages/HomePage/HomePage";
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";

function App() {
  return (
    <div className="App">
      <Router>
          <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
