import './SidebarComponent.scss'
import {useContext, useState} from "react";
import {Context} from "../../App";
import {Link} from "react-router-dom";
import {HomePage} from "../../pages/HomePage/HomePage";
import {MyCoupling} from "../../pages/MyCoupling/MyCoupling";
import {MyMachine} from "../../pages/MyMachine/MyMachine";
import {AboutUs} from "../../pages/AboutUs/AboutUs";
import {Contact} from "../../pages/Contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export const SidebarComponent = () => {
    const [toggleSidebar, setToggleSidebar] = useContext(Context);
    const [sidebarFunctionality, setSidebarFunctionality] = useState(false);

    function toggleFunctionality(value) {
        setSidebarFunctionality(value);
    }

    return (
        <aside className={`${!toggleSidebar ? 'aside-container--hidden' : ''}`}>
            <div className={`aside__subcontainer ${sidebarFunctionality ? 'aside__subcontainer--hidden' : ''}`}>
                <div className={'aside__line-container'}>
                    <div className={'aside__line aside__line--no-bg'}>
                        <h2 className={'section-subtitle'}>
                            Menu
                        </h2>
                        <FontAwesomeIcon className={'btn btn--close'} icon={faCircleXmark} onClick={() => {setToggleSidebar(false)}}/>
                    </div>
                </div>
                <div className={`aside__line-container`}>
                    <div className={'aside__line'} onClick={() => toggleFunctionality(true)}>
                        <FontAwesomeIcon className={'sidebar-icon'} icon={faUser} />
                        <p>Logowanie</p>
                    </div>
                </div>
                {/*<div className={'aside__line-container'} onClick={() => toggleFunctionality({signIn: false, setting: true})}>*/}
                {/*    <div className={'aside__line'}>*/}
                {/*        <FontAwesomeIcon className={'sidebar-icon'} icon={faGear} />*/}
                {/*        <p>Settings</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={'aside__line-container aside__line-container--column'}>

                    <Accordion className={'aside__line aside__line--accordion'}>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Link className={'aside__line aside__line--narrow'} to={'moje-zlacze'} element={<MyCoupling/>}>Moje złącze</Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul >
                                <li className="nav__submenu-item ">
                                    <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Accordion className={'aside__line aside__line--accordion'}>
                                        <AccordionSummary
                                            expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Link className={'aside__line aside__line--narrow'} to={'/moja-maszyna'} element={<MyMachine/>}>Atlas</Link>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul >
                                                <li className="nav__submenu-item ">
                                                    <Link to={''}>Atlas 35</Link>
                                                </li>

                                                <li className="nav__submenu-item ">
                                                    <Link to={''} >Atlas 95</Link>
                                                </li>
                                            </ul>

                                        </AccordionDetails>
                                    </Accordion>
                                </li>
                            </ul>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={'aside__line aside__line--accordion'}>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Link className={'aside__line aside__line--narrow'} to={'/moja-maszyna'} element={<MyMachine/>}>Moja maszyna</Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul >
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/ladowarka-kolowa'}>Ładowarka kołowa</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/koparka'}>Koparka</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/traktor'} >Traktor</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/ladowarka-teleskopowa'} >Ładowarka teleskopowa</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/wozek-widlowy'} >Wózek widłowy</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/moja-maszyna/bez-zlacz'} >Bez złącz</Link>
                                </li>
                            </ul>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={'aside__line aside__line--accordion'}>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Link className={'aside__line aside__line--narrow'} to={'/o-nas'} element={<AboutUs/>}>O nas</Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul >
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/kontakt'}>Kontakt</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/to-jest-se'}>To jest SE</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/zrownowazony-rozwoj'} >Zrównoważony rozwój</Link>
                                </li>
                                <li className="nav__submenu-item ">
                                    <Link to={'/o-nas/znajdz-posrednika'} >Znajdź pośrednika</Link>
                                </li>
                            </ul>

                        </AccordionDetails>
                    </Accordion>

                </div>
                <div className={'aside__line-container aside__line-container--column'}>
                    <Link className={'aside__line'} to={'/'} element={<HomePage />}>Start</Link>
                    <Link className={'aside__line'} to={'/o-nas/kontakt'} element={<Contact />}>Kontakt</Link>
                </div>
            </div>
            <div className={`aside__subcontainer ${sidebarFunctionality ? '' : 'aside__subcontainer--hidden'}`}>
                <div className={'aside__line-container'}>
                    <div className={'aside__line aside__line--no-bg'}>
                        <h2 className={'section-subtitle'}>
                            Logowanie
                        </h2>
                        <FontAwesomeIcon className={'btn btn--close'} icon={faCircleXmark} onClick={() => toggleFunctionality(false)}/>
                    </div>
                </div>
                <form className={'form'}>
                    <div className={'aside__line-container'}>
                        <div className={'aside__line'}>
                            <div>
                                <FontAwesomeIcon className={'sidebar-icon'} icon={faUser} />
                                <label htmlFor={'login'}>Login*:</label>
                            </div>
                            <input required={true} type="text" id={'login'} placeholder={'Wpisz login'}/>
                        </div>
                        <div className={'aside__line'}>
                            <div>
                                <FontAwesomeIcon className={'sidebar-icon'} icon={faLock} />
                                <label htmlFor={'password'}>Hasło*:</label>
                            </div>
                            <input required={true} type="text" id={'password'} placeholder={'Wpisz hasło'}/>
                        </div>
                        <button className={'button button--login'} type="submit">Zaloguj</button>
                    </div>
                </form>
            </div>
        </aside>
    );
}