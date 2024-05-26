import '../../styles.scss';
import './NavbarComponent.scss';
import seLogo from '../../assets/logos/se-logo.png';
import iconFb from '../../assets/icons/icon-facebook.png';
import iconIg from '../../assets/icons/icon-instagram.png';
import iconYt from '../../assets/icons/icon-youtube.png';
import iconMail from '../../assets/icons/icon-mail.png';
import hamburger from '../../assets/icons/hamburger.svg';
import {Link} from "react-router-dom";
import {HomePage} from "../../pages/HomePage/HomePage";
import {useContext} from "react";
import {Context} from "../../App";
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {ThreePoint} from "../../pages/ThreePoint/ThreePoint";
import {Excavator} from "../../pages/Excavator/Excavator";
import {Tractor} from "../../pages/Tractor/Tractor";
import {WheelLoader} from "../../pages/WheelLoader/WheelLoader";
import {TelescopicHandler} from "../../pages/TelescopicHandler/TelescopicHandler";
import {Forklift} from "../../pages/Forklift/Forklift";
import {WithoutCoupling} from "../../pages/WithoutCoupling/WithoutCoupling";
import {Contact} from "../../pages/Contact/Contact";
import {ThisIsSe} from "../../pages/ThisIsSe/ThisIsSe";
import {Sustainability} from "../../pages/Sustainability/Sustainability";
import {FindReseller} from "../../pages/FindReseller/FindReseller";

export const NavbarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);

    const myCouplingSubmenu = [
        {linkName: '3 punkt', url: '/moje-zlacze/3-punkt'},
    ];



    const aboutUsSubmenu = [
        {linkName: 'Kontakt', url: '/o-nas/kontakt'},
        {linkName: 'To jest se', url: '/o-nas/to-jest-se'},
        {linkName: 'Zrównoważony rozwój', url: '/o-nas/zrownowazony-rozwoj'},
        {linkName: 'Znajdź pośrednika', url: '/o-nas/znajdz-posrednika'},
    ];

    return (
        <nav className={'nav'}>
            <div className={'nav--top section-contrains'}>
                <Link to={'/'} element={<HomePage />}>
                    <picture className={'se-logo'}>
                        <img src={seLogo} alt={'SE Europe logo'} />
                    </picture>
                </Link>
                <div className={'icons-container'}>
                    <div className={'socials'}>
                        <Link className={'icon'} to={'https://www.facebook.com/SEEquipmentPolandSpzoo/'} target="_blank">
                            <picture>
                                <img src={iconFb} alt={'Facebook icon'} />
                            </picture>
                        </Link>
                        <Link className={'icon'} to={'https://www.instagram.com/se_equipment_poland/'} target="_blank">
                            <picture>
                                <img src={iconIg} alt={'Instagram icon'} />
                            </picture>
                        </Link>
                        <Link className={'icon'} to={'https://www.youtube.com/channel/UCyHY8EgVJ5y3sGhjkQuLAvQ'} target="_blank">
                            <picture>
                                <img src={iconYt} alt={'YouTube icon'} />
                            </picture>
                        </Link>
                        <Link className={'icon'} to={'mailto:office-pl@se-europe.com'} target="_blank">
                            <picture>
                                <img src={iconMail} alt={'Email icon'} />
                            </picture>
                        </Link>
                    </div>
                    <div className={'sidebar-toggle'}>
                        <button onClick={() => setToggleSidebar(!toggleSidebar)}>
                            <picture className={'icon'}>
                                <img src={hamburger} />
                            </picture>
                        </button>
                    </div>
                </div>
            </div>
            <div className={'nav--bottom text-shadow'}>

                    <ul className="nav__menu">
                        <li className="nav__menu-item">
                            <a>Moje złącze</a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item ">
                                    <Link to={'/moje-zlacze/3-punkt'} element={<ThreePoint />}>3 punkt</Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="nav__menu-item"
                        >
                            <a>Moja maszyna</a>
                            {/*const myMachineSubmenu = [*/}
                            {/*{linkName: 'Ładowarka kołowa', url: '/moja-maszyna/ladowarka-kolowa'},*/}
                            {/*{linkName: 'Koparka', url: '/moja-maszyna/koparka'},*/}
                            {/*{linkName: 'Traktor', url: '/moja-maszyna/traktor'},*/}
                            {/*{linkName: 'Ładowarka teleskopowa', url: '/moja-maszyna/ladowarka-teleskopowa'},*/}
                            {/*{linkName: 'Wózek widłowy', url: '/moja-maszyna/wozek-widlowy'},*/}
                            {/*{linkName: 'Bez złącz', url: '/moja-maszyna/bez-zlacz'},*/}
                            {/*];*/}
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/ladowarka-kolowa'} element={<WheelLoader />}>Ładowarka kołowa</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/koparka'} element={<Excavator />}>Koparka</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/traktor'} element={<Tractor />}>Traktor</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/ladowarka-teleskopowa'} element={<TelescopicHandler />}>Ładowarka teleskopowa</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/wozek-widlowy'} element={<Forklift />}>Wózek widłowy</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/bez-zlacz'} element={<WithoutCoupling />}>Bez złącz</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a>O nas</a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/kontakt'} element={<Contact />}>Kontakt</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/to-jest-se'} element={<ThisIsSe />}>To jest SE</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/zrownowazony-rozwoj'} element={<Sustainability />}>Zrównoważony rozwój</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/znajdz-posrednika'} element={<FindReseller />}>Znajdź pośrednika</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

            </div>
        </nav>
    );
}