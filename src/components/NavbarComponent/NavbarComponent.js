import '../../styles.scss';
import './NavbarComponent.scss';
import seLogo from '../../assets/logos/se-logo.png';
import iconFb from '../../assets/icons/icon-facebook.png';
import iconIg from '../../assets/icons/icon-instagram.png';
import iconYt from '../../assets/icons/icon-youtube.png';
import iconMail from '../../assets/icons/icon-mail.png';
import hamburger from '../../assets/icons/hamburger.svg';
import {Link} from "react-router-dom";
import {MyCoupling} from "../../pages/MyCoupling/MyCoupling";
import {AboutUs} from "../../pages/AboutUs/AboutUs";
import {MyMachine} from "../../pages/MyMachine/MyMachine";
import {HomePage} from "../../pages/HomePage/HomePage";
import {useContext, useState} from "react";
import {Context} from "../../App";

export const NavbarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);

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
                <div className={'submenu-container'}>
                    <div className={'submenu__link-container'}>
                        <Link className={'submenu__title'} to={'/moje-zlacze'} element={<MyCoupling/>}>Moje złączę</Link>
                    </div>
                    <ul className={'submenu'}>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Atlas</Link>
                        </li>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Avant</Link>
                        </li>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Bobcat</Link>
                        </li>
                    </ul>
                </div>
                <div className={'submenu-container'}>
                    <div className={'submenu__link-container'}>
                        <Link className={'submenu__title'} to={'/moja-maszyna'} element={<MyMachine/>}>Moja maszyna</Link>
                    </div>
                    <ul className={'submenu'}>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>ŁADOWARKA KOŁOWA</Link>
                        </li>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Koparka</Link>
                        </li>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Traktor</Link>
                        </li>
                    </ul>
                </div>
                <div className={'submenu-container'}>
                    <div className={'submenu__link-container'}>
                        <Link className={'submenu__title'} to={'/o-nas'} element={<AboutUs/>}>O nas</Link>
                    </div>
                    <ul className={'submenu'}>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>Kontakt</Link>
                        </li>
                        <li>
                            <Link to={'/'} element={<MyCoupling/>}>To jest SE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}