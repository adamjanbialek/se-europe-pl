import '../../styles.scss';
import './NavbarComponent.scss';
import seLogo from '../../assets/logos/se-logo.png';
import poland from '../../assets/icons/poland.png';
import {Link} from "react-router-dom";
import {HomePage} from "../../pages/HomePage/HomePage";
import {useContext} from "react";
import {Context} from "../../App";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const NavbarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);

    let lastScrollTop = 0;

    const toggleNavbar = () => {
        let scrollY = window.pageYOffset || document.documentElement.scrollTop;

        const navBarContent = document.querySelector('.nav-bar__content');

        scrollY > lastScrollTop ? navBarContent.classList.remove('visible')  : navBarContent.classList.add('visible');

        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    }

    window.addEventListener("scroll", toggleNavbar);

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
        <nav className={'nav '}>
            <div className={'nav-bar__content visible'}>
                <div className={'nav--top section-contrains'}>
                    <Link to={'/'} element={<HomePage />}>
                        <picture className={'se-logo'}>
                            <img src={seLogo} alt={'SE Europe logo'} />
                        </picture>
                    </Link>
                    <div className={'icons-container'}>
                        <div>
                            <Link className={'icon'} target="_blank">
                                <img src={poland} className={'langs'}/>
                            </Link>
                        </div>
                        <div className={'socials'}>
                            <Link className={'icon'} to={'https://www.facebook.com/SEEquipmentPolandSpzoo/'} target="_blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className={'icon'} to={'https://www.instagram.com/se_equipment_poland/'} target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link className={'icon'} to={'https://www.youtube.com/channel/UCyHY8EgVJ5y3sGhjkQuLAvQ'} target="_blank">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                            <Link className={'icon'} to={'mailto:office-pl@se-europe.com'} target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Link>
                        </div>
                        <div className={'sidebar-toggle'}>
                            <button className={'icon'} onClick={() => setToggleSidebar(!toggleSidebar)}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'nav--bottom text-shadow'}>

                    <ul className="nav__menu">
                        <li className="nav__menu-item">
                            <a className={'link-container'}>
                                Moje złącze
                                <FontAwesomeIcon icon={faAngleUp} className={'angle-up'} />
                            </a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item ">
                                    <Link to={'/moje-zlacze/3-punkt'} element={<ThreePoint />}>3 punkt</Link>
                                </li>
                                <li className="nav__submenu-item nav__submenu-item--list">
                                    <Link to={'/moje-zlacze/avant'} element={<ThreePoint />}>
                                        Avant
                                        <FontAwesomeIcon icon={faAngleUp} className={'angle-up'} />
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to={'/moje-zlacze/avant-200'} element={<ThreePoint />}>Avant 200</Link>
                                        </li>
                                        <li>
                                            <Link to={'/moje-zlacze/avant-multione'} element={<ThreePoint />}>Avant Multione</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a className={'link-container'}>
                                Moja maszyna
                                <FontAwesomeIcon icon={faAngleUp} className={'angle-up'} />
                            </a>
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
                            <a className={'link-container'}>
                                O nas
                                <FontAwesomeIcon icon={faAngleUp} className={'angle-up'} />
                            </a>
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
            </div>
        </nav>
    );
}