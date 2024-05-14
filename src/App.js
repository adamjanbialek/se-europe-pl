import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {HomePage} from "./pages/HomePage/HomePage";
import {MyMachine} from "./pages/MyMachine/MyMachine";
import {MyCoupling} from "./pages/MyCoupling/MyCoupling";

function App() {
  return (
    <div className="App">
      <Router>
          <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moja-zlacze" element={<MyCoupling />} />
          <Route path="/moja-maszyna" element={<MyMachine />} />
        </Routes>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
