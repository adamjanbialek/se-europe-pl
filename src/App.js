import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";
import {SidebarComponent} from "./components/SidebarComponent/SidebarComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {HomePage} from "./pages/HomePage/HomePage";
import {MyMachine} from "./pages/MyMachine/MyMachine";
import {MyCoupling} from "./pages/MyCoupling/MyCoupling";
import {createContext, useState} from "react";
import {ThreePoint} from "./pages/ThreePoint/ThreePoint";
import {Tractor} from "./pages/Tractor/Tractor";
import {TelescopicHandler} from "./pages/TelescopicHandler/TelescopicHandler";
import {WheelLoader} from "./pages/WheelLoader/WheelLoader";
import {Excavator} from "./pages/Excavator/Excavator";
import {Forklift} from "./pages/Forklift/Forklift";
import {WithoutCoupling} from "./pages/WithoutCoupling/WithoutCoupling";
import {Contact} from "./pages/Contact/Contact";
import {ThisIsSe} from "./pages/ThisIsSe/ThisIsSe";

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
                  <Route path="/moje-zlacze/3-punkt" element={<ThreePoint />} />
                  <Route path="/moja-maszyna" element={<MyMachine />} ></Route>
                  <Route path="/moja-maszyna/ladowarka-kolowa" element={<WheelLoader />} />
                  <Route path="/moja-maszyna/koparka" element={<Excavator />} />
                  <Route path="/moja-maszyna/traktor" element={<Tractor />} />
                  <Route path="/moja-maszyna/ladowarka-teleskopowa" element={<TelescopicHandler />} />
                  <Route path="/moja-maszyna/wozek-widlowy" element={<Forklift />} />
                  <Route path="/moja-maszyna/bez-zlacz" element={<WithoutCoupling />} />
                  <Route path="/o-nas/kontakt" element={<Contact />} />
                  <Route path="/o-nas/to-jest-se" element={<ThisIsSe />} />
              </Routes>
              <FooterComponent />
          </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
