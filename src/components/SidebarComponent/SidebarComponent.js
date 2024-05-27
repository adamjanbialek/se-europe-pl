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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export const SidebarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);

    return (
        <aside className={`${!toggleSidebar ? 'aside-container--hidden' : ''}`}>
            <div className={'aside__line-container'}>
                <div className={'aside__line aside__line--no-bg'}>
                    <h2 className={'section-subtitle'}>
                        Menu
                    </h2>
                    <FontAwesomeIcon className={'btn btn--close'} icon={faCircleXmark} onClick={() => {setToggleSidebar(false)}}/>
                </div>
            </div>
            <div className={'aside__line-container'}>
                <div className={'aside__line'}>
                    <FontAwesomeIcon className={'sidebar-icon'} icon={faUser} />
                    <p>Sign in</p>
                </div>
            </div>
            <div className={'aside__line-container'}>
                <div className={'aside__line'}>
                    <FontAwesomeIcon className={'sidebar-icon'} icon={faGear} />
                    <p>Settings</p>
                </div>
            </div>
            <div className={'aside__line-container aside__line-container--column'}>
                <Link className={'aside__line'} to={'moje-zlacze'} element={<MyCoupling/>}>Moje złącze</Link>
                <Link className={'aside__line'} to={'/moja-maszyna'} element={<MyMachine/>}>Moja maszyna</Link>
                <Link className={'aside__line'} to={'/o-nas'} element={<AboutUs/>}>O nas</Link>
            </div>
            <div className={'aside__line-container aside__line-container--column'}>
                <Link className={'aside__line'} to={'/'} element={<HomePage />}>Start</Link>
                <Link className={'aside__line'} to={'/o-nas/kontakt'} element={<Contact />}>Kontakt</Link>
            </div>
        </aside>
    );
}