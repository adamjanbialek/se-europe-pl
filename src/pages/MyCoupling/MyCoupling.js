import './MyCoupling.scss';
import {Link} from "react-router-dom";
import atlas from "../../assets/couplings/Atlas65.png";
import avant from "../../assets/couplings/avant.png";
import bobcat from "../../assets/couplings/bobcat.png";
import cat from "../../assets/couplings/cat906.png";
import euro from "../../assets/couplings/euro.png";
import giant from "../../assets/couplings/giant.png";
import hydrema from "../../assets/couplings/hydrema.png";
import jcb from "../../assets/couplings/jcb.png";
import johnDeere from "../../assets/couplings/john deere.png";
import kramer180 from "../../assets/couplings/kramer.png";
import kramer380 from "../../assets/couplings/kramer2.png";
import l20 from "../../assets/couplings/lv.png";
import smallBm from "../../assets/couplings/smallBM.png";
import manitou from "../../assets/couplings/manitou.png";
import s1Upp from "../../assets/couplings/s1upp.png";
import sCouplings from "../../assets/couplings/scouplings.png";
import sms from "../../assets/couplings/sms.png";
import bigBm from "../../assets/couplings/bigBM.png";
import terex from "../../assets/couplings/terex.png";
import weidemann from "../../assets/couplings/weidemann.png";

export const MyCoupling = () => {
    return (
        <main className={'my-machine'}>
            <section className={'section-contrains'}>
                <h1>Moja złączę</h1>
                <p>Kliknij</p>
                <div className={'vehicles-list'}>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={atlas}/>
                        </picture>
                        <p className={'vehicle-name'}>ATLAS</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={avant}/>
                        </picture>
                        <p className={'vehicle-name'}>AVANT</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={bobcat}/>
                        </picture>
                        <p className={'vehicle-name'}>BOBCAT</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={cat}/>
                        </picture>
                        <p className={'vehicle-name'}>CAT 906</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={euro}/>
                        </picture>
                        <p className={'vehicle-name'}>EURO</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={giant}/>
                        </picture>
                        <p className={'vehicle-name'}>GIANT</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={hydrema}/>
                        </picture>
                        <p className={'vehicle-name'}>HYDREMA 45</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={jcb}/>
                        </picture>
                        <p className={'vehicle-name'}>JCB</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={johnDeere}/>
                        </picture>
                        <p className={'vehicle-name'}>JOHN DEERE</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={kramer180}/>
                        </picture>
                        <p className={'vehicle-name'}>KRAMER 180-350</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={kramer380}/>
                        </picture>
                        <p className={'vehicle-name'}>KRAMER 380-580</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={l20}/>
                        </picture>
                        <p className={'vehicle-name'}>L20/L25 UP TO L220</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={smallBm}/>
                        </picture>
                        <p className={'vehicle-name'}>SMALL BM</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={manitou}/>
                        </picture>
                        <p className={'vehicle-name'}>MANITOU</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={s1Upp}/>
                        </picture>
                        <p className={'vehicle-name'}>S1 UPP TILL S3</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={sCouplings}/>
                        </picture>
                        <p className={'vehicle-name'}>S-COUPLINGS</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={sms}/>
                        </picture>
                        <p className={'vehicle-name'}>SMS</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={bigBm}/>
                        </picture>
                        <p className={'vehicle-name'}>BIG BM</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={terex}/>
                        </picture>
                        <p className={'vehicle-name'}>TEREX</p>
                    </Link>
                    <Link className={'vehicle-link'} to="">
                        <div className={'bg-change'}/>
                        <picture>
                            <img src={weidemann}/>
                        </picture>
                        <p className={'vehicle-name'}>WEIDEMANN</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}