import './MyMachine.scss';
import {Link} from "react-router-dom";
import wheelLoader from "../../assets/home/wheel-loader.png";
import excavator from "../../assets/home/excavator.png";
import tractor from "../../assets/home/tractor.png";
import telescopicHandler from "../../assets/home/telescopic-handler.png";
import skidLoader from "../../assets/home/skid-loader.png";
import forkLift from "../../assets/home/fork-lift.png";

export const MyMachine = () => {
    return (
        <main className={'my-machine'}>
            <h1>Moja maszyna</h1>
            <div className={'vehicles-list'}>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={wheelLoader}/>
                    </picture>
                    <p className={'vehicle-name'}>ŁADOWARKA KOŁOWA</p>
                </Link>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={excavator}/>
                    </picture>
                    <p className={'vehicle-name'}>KOPARKA</p>
                </Link>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={tractor}/>
                    </picture>
                    <p className={'vehicle-name'}>TRAKTOR</p>
                </Link>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={telescopicHandler}/>
                    </picture>
                    <p className={'vehicle-name'}>PODNOŚNIK TELESKOPOWY</p>
                </Link>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={skidLoader}/>
                    </picture>
                    <p className={'vehicle-name'}>ŁADOWARKA SKRZYNKOWA</p>
                </Link>
                <Link className={'vehicle-link'} to="">
                    <div className={'bg-change'}/>
                    <picture>
                        <img src={forkLift}/>
                    </picture>
                    <p className={'vehicle-name'}>WÓZEK WIDŁOWY</p>
                </Link>
            </div>
        </main>
    );
}