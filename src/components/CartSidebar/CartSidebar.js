import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faArrowLeft, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import {Link} from "react-router-dom";
import {MyCoupling} from "../../pages/MyCoupling/MyCoupling";
import AccordionDetails from "@mui/material/AccordionDetails";
import {MyMachine} from "../../pages/MyMachine/MyMachine";
import {AboutUs} from "../../pages/AboutUs/AboutUs";
import {Contact} from "../../pages/Contact/Contact";
import {useContext} from "react";
import {CartContext} from "../../App";
import './CartSidebar.scss';

export const CartSidebar = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <aside >
            <div className={`aside__subcontainer`}>
                <div className={'aside__line-container'}>
                    <div className={'aside__line aside__line--no-bg'}>
                        <h2 className={'sidebar-title'}>
                            Koszyk
                        </h2>
                        <FontAwesomeIcon className={'btn btn--close btn--close--cart'} icon={faXmark}/>
                    </div>
                </div>
                <div className={`aside__line-container aside__line-container--cart`}>
                    <button className={'btn-sidebar--cart'}>Do kasy</button>
                    <button className={'btn-sidebar--cart'}>Złożenie oferty</button>
                    <div className={'info-container'}>
                        <p>{cart.reduce((acc, el) => acc + el.quantity, 0)} produkt(ów)</p>
                        <p>Koszt {cart.reduce((acc,el) => acc + (el.price * el.quantity), 0 )} <br></br>
                            Wyłączając VAT</p>
                    </div>
                </div>
                <div className={'aside__line-container aside__line-container--column'}>
                    <ul className={'cart-item-container'}>
                        {cart.map(product => {
                            return (
                                <div className={'cart-item'}>
                                    <div className={'cart-img-container'}>
                                        <span>{product.quantity}</span>
                                        <img className={'cart-img'} src={product.imgUrl}/>
                                    </div>
                                    <div>
                                        <p>{product.id}</p>
                                        <h3>{product.title}</h3>
                                        <p>{product.price}</p>
                                        <p>Sztuk: ${product.price * product.quantity}</p>
                                    </div>
                                    <FontAwesomeIcon className={'btn btn--close'} icon={faXmark} />
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
}