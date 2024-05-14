import './HomePage.scss';
import vehiclePart from '../../assets/home/vehicle-part.png';
import construction from '../../assets/home/construction.png';
import excavator from '../../assets/home/excavator.png';
import wheelLoader from '../../assets/home/wheel-loader.png';
import tractor from '../../assets/home/tractor.png';
import telescopicHandler from '../../assets/home/telescopic-handler.png';
import skidLoader from '../../assets/home/skid-loader.png';
import forkLift from '../../assets/home/fork-lift.png';
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <main>
            <picture className={'screenwide'}>
                <img src={vehiclePart}/>
            </picture>
            <section className={'place-order'}>
                <div className={'gradient-box-container'}>
                    <div className={'gradient-box'}>
                        <h2>Place your order through our e-commerce</h2>
                        <p>Receive a construction shovel to the value of 350sek!</p>
                        <span>OBS! Offer do not apply to brackets spare parts.</span>
                    </div>
                    <div className={'img-box'}>
                        <picture className={''}>
                            <img src={construction}/>
                        </picture>
                    </div>
                </div>
            </section>
            <section className={'vehicles'}>
                <p>
                    SE Equipment AB magazynuje i dostarcza sprzęt, aby szybko zaspokoić potrzeby Twoje i rynku.
                    Zaopatrujemy sprzedawców detalicznych w całej Europie w szeroką gamę wysokiej jakości produktów z
                    naszego dużego magazynu w Linköping. Cała sprzedaż odbywa się za pośrednictwem naszych sprzedawców.
                </p>
                <h2>
                    DESIGN - JAKOŚĆ - BEZPIECZEŃSTWO - CENA
                </h2>
                <div className={'vehicles-list'}>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={wheelLoader}/>
                        </picture>
                        <p className={'vehicle-name'}>ŁADOWARKA KOŁOWA</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={excavator}/>
                        </picture>
                        <p className={'vehicle-name'}>KOPARKA</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={tractor}/>
                        </picture>
                        <p className={'vehicle-name'}>TRAKTOR</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={telescopicHandler}/>
                        </picture>
                        <p className={'vehicle-name'}>PODNOŚNIK TELESKOPOWY</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={skidLoader}/>
                        </picture>
                        <p className={'vehicle-name'}>ŁADOWARKA SKRZYNKOWA</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <picture>
                            <img src={forkLift}/>
                        </picture>
                        <p className={'vehicle-name'}>WÓZEK WIDŁOWY</p>
                    </Link>
                </div>
            </section>
            <section>
                <div className={'end-of-page'}></div>
            </section>
        </main>
    );
}