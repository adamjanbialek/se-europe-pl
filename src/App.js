import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";
import {SidebarComponent} from "./components/SidebarComponent/SidebarComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {HomePage} from "./pages/HomePage/HomePage";
import {MyMachine} from "./pages/MyMachine/MyMachine";
import {MyCoupling} from "./pages/MyCoupling/MyCoupling";
import {createContext, useState} from "react";

export const Context = createContext();

function App() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <Context.Provider value={[toggleSidebar, setToggleSidebar]}>
          <Router>
              <NavbarComponent />
              <SidebarComponent />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/moje-zlacze" element={<MyCoupling />} />
                  <Route path="/moja-maszyna" element={<MyMachine />} />
              </Routes>
              <FooterComponent />
          </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
