import AccordionSummary from "@mui/material/AccordionSummary";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

export const MyPage = () => {
    return (
        <main className={'my-machine'}>

            <section className={'section-contrains tables-page'}>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Lista cen</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Kampania</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Moje ulubione produkty</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Moje dane</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Dokumenty</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className={'aside__line aside__line--accordion'}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon className={'angle-up'} icon={faAngleUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Link className={'aside__line aside__line--narrow'} >Bank zdjęć</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul >
                            <li className="nav__submenu-item ">
                                <Link to={'/moje-zlacze/3-punkt'} >3 punkt</Link>
                            </li>
                        </ul>

                    </AccordionDetails>
                </Accordion>
            </section>
        </main>
    );
}