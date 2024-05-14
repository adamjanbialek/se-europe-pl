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

export const NavbarComponent = () => {
    return (
        <nav className={'nav'}>
            <div className={'nav--top'}>
                <Link to={'/'} element={<HomePage />}>
                    <picture className={'se-logo'}>
                        <img src={seLogo} alt={'SE Europe logo'} />
                    </picture>
                </Link>
                <div className={'icons-container'}>
                    <div className={'socials'}>
                        <picture className={'icon'}>
                            <img src={iconFb} alt={'Facebook icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconIg} alt={'Instagram icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconYt} alt={'YouTube icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconMail} alt={'Email icon'} />
                        </picture>
                    </div>
                    <div className={'sidebar-toggle'}>
                        <picture className={'icon'}>
                            <img src={hamburger} />
                        </picture>
                    </div>
                </div>
            </div>
            <div className={'nav--bottom'}>
                <Link to={'/moje-zlacze'} element={<MyCoupling/>}>Moje złączę</Link>
                <Link to={'/moja-maszyna'} element={<MyMachine/>}>Moja maszyna</Link>
                <Link to={'/o-nas'} element={<AboutUs/>}>O nas</Link>
            </div>
        </nav>
    );
}