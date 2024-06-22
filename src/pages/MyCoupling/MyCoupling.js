import './MyCoupling.scss';
import {LinksListWithImages} from "../../components/LinksListWithImages/LinksListWithImages";


export const MyCoupling = (props) => {

    return (
        <main className={'my-machine'}>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>Moja złączę</h1>
                    <p className={'paragraph paragraph--medium'}>Kliknij</p>
                </div>
                <LinksListWithImages data={props.products.map(el => Array.isArray(el) ? el[0] : el)} />
            </section>
        </main>
    );
}