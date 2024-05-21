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
import {Sustainability} from "./pages/Sustainability/Sustainability";
import {NewCustomer} from "./pages/NewCustomer/NewCustomer";
import {SecurityCookies} from "./pages/SecurityCookies/SecurityCookies";
import {MyAccount} from "./pages/MyAccount/MyAccount";
import {HowToShop} from "./pages/HowToShop/HowToShop";

export const Context = createContext(false);

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
                  <Route path="/moje-zlacze">
                      <Route index  element={<MyCoupling />} />
                      <Route path="3-punkt" element={<ThreePoint />} />
                  </Route>
                  <Route path="/moja-maszyna">
                      <Route index element={<MyMachine />} />
                      <Route path="ladowarka-kolowa" element={<WheelLoader />} />
                      <Route path="koparka" element={<Excavator />} />
                      <Route path="traktor" element={<Tractor />} />
                      <Route path="ladowarka-teleskopowa" element={<TelescopicHandler />} />
                      <Route path="wozek-widlowy" element={<Forklift />} />
                      <Route path="bez-zlacz" element={<WithoutCoupling />} />
                  </Route>
                  <Route path="/o-nas">
                      <Route path="kontakt" element={<Contact />} />
                      <Route path="to-jest-se" element={<ThisIsSe />} />
                      <Route path="zrownowazony-rozwoj" element={<Sustainability />} />
                  </Route>
                  <Route path="/nowy-klient" element={<NewCustomer />} />
                  <Route path="/jak-zamawiac" element={<HowToShop />} />
                  <Route path="/bezpieczenstwo-cookies" element={<SecurityCookies />} />
                  <Route path="/moje-konto" element={<MyAccount />} />
              </Routes>
              <FooterComponent />
          </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
