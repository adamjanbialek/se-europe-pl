import './SidebarComponent.scss'
import {useContext} from "react";
import {Context} from "../../App";
import {Link} from "react-router-dom";
import {HomePage} from "../../pages/HomePage/HomePage";
import {MyCoupling} from "../../pages/MyCoupling/MyCoupling";
import {MyMachine} from "../../pages/MyMachine/MyMachine";
import {AboutUs} from "../../pages/AboutUs/AboutUs";
import settings from '../../assets/icons/settings.png'
import user from '../../assets/icons/user.png'
import {Contact} from "../../pages/Contact/Contact";

export const SidebarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);

    return (
        <aside className={`${!toggleSidebar ? 'aside-container--hidden' : ''}`}>
            <div className={'aside__line-container'}>
                <h2 className={'section-subtitle'}>
                    Menu
                </h2>
                <button className={'btn'} onClick={() => {setToggleSidebar(false)}}>x</button>
            </div>
            <div className={'aside__line-container'}>
                <picture className={'sidebar-icon'}>
                    <img src={user} />
                </picture>
                <p>Sign in</p>
            </div>
            <div className={'aside__line-container'}>
                <picture className={'sidebar-icon'}>
                    <img src={settings} />
                </picture>
                <p>Settings</p>
            </div>
            <div className={'aside__line-container aside__line-container--column'}>
                <Link to={'moje-zlacze'} element={<MyCoupling/>}>Moje złącze</Link>
                <Link to={'/moja-maszyna'} element={<MyMachine/>}>Moja maszyna</Link>
                <Link to={'/o-nas'} element={<AboutUs/>}>O nas</Link>
            </div>
            <div className={'aside__line-container aside__line-container--column'}>
                <Link to={'/'} element={<HomePage />}>Start</Link>
                <Link to={'/o-nas/kontakt'} element={<Contact />}>Kontakt</Link>
            </div>
        </aside>
    );
}