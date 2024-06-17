import './Tractor.scss';
import adapter from "../../assets/tractor/adapter.png";
import bale from "../../assets/tractor/bale.png";
import widly1 from "../../assets/tractor/widly.png";
import hak from "../../assets/tractor/hak.png";
import zlacza from "../../assets/tractor/zlacza.png";
import lyzka from "../../assets/tractor/lyzka.png";
import widly2 from "../../assets/tractor/widly.png";
import krokodyl from "../../assets/tractor/lyzka.png";
import kolnierz from "../../assets/tractor/lyzka.png";
import lyzka2 from "../../assets/tractor/lyzka.png";
import {LinksListWithImages} from "../../components/LinksListWithImages/LinksListWithImages";

export const Tractor = () => {
    const products = [
        {name: 'Adapter', imgUrl: adapter},
        {name: 'Bale grip', imgUrl: bale},
        {name: 'Widły do bel', imgUrl: widly1},
        {name: 'Hak do big bagów', imgUrl: hak},
        {name: 'Złącza', imgUrl: zlacza},
        {name: 'Łyżka wyrównująca', imgUrl: ''},
        {name: 'Łyżka do materiałów sypkich', imgUrl: lyzka},
        {name: 'Widły do palet', imgUrl: widly2},
        {name: 'Krokodyl', imgUrl: krokodyl},
        {name: 'Kołnierz śniegowy', imgUrl: kolnierz},
        {name: 'Łyżka do kamieni', imgUrl: lyzka2},
    ];

    return (
        <main className={'my-machine'}>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>Traktor</h1>
                    <p className={'paragraph paragraph--medium'}>
                        Tutaj znajdziesz pełną standardową gamę sprzętu SE Equipment do ciągników.
                        Oferujemy szeroki wybór osprzętu, od łyżek po sprzęt do podnoszenia.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Kliknij na wybrany produkt poniżej, aby znaleźć odpowiednie narzędzie dla siebie.
                    </p>
                </div>
                <LinksListWithImages data={products} />
            </section>
        </main>
    );
}