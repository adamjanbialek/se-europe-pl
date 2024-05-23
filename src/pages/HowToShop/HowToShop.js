import './HowToShop.scss';

export const HowToShop = () => {
    return (
        <main>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container left-orientation'}>
                    <h1 className={'page-title'}>JAK KORZYSTAĆ ZE SKLEPU INTERNETOWEGO</h1>
                    <br />
                    <h2 className={'section-subtitle section-subtitle--secondary-color'}>ZNAJDOWANIE PRZEDMIOTÓW</h2>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Istnieje kilka sposobów na znalezienie przedmiotu:
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Do przeglądania elementów można używać drzewa nawigacji.
                        Jeśli znasz już wszystkie numery artykułów, możesz skorzystać z „łatwego zamówienia”, aby przyspieszyć proces składania zamówienia.
                        Skorzystaj z pola wyszukiwania. Więcej informacji na temat wyszukiwania znajdziesz w sekcji pomocy w sekcji „wskazówki dotyczące wyszukiwania”.
                        Gdy znajdziesz żądany przedmiot, naciśnij „kup” lub „wybierz”.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Opcja wyboru zostanie wyświetlona, jeśli dostępne będą dodatkowe możliwości wyboru, na przykład koloru lub rozmiaru.
                    </p>
                    <br />
                    <h2 className={'section-subtitle section-subtitle--secondary-color'}>WÓZEK SKLEPOWY</h2>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Po kliknięciu „kup” przedmiot zostanie umieszczony w Twoim koszyku.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Tutaj pokazujemy Twoje produkty i całkowitą sumę zamówienia.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Klikając „do koszyka” możesz zmienić zawartość koszyka, zakończyć i wysłać zamówienie.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Dzięki opcji „zapisz koszyk na liście ulubionych” możesz zapisać wszystkie produkty w koszyku i kontynuować zakupy później.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Następnym raze, gdy odwiedzisz sklep internetowy, po prostu przejdź do Mojego konta i umieść zapisaną listę ulubionych w koszyku.
                    </p>
                </div>
            </section>
        </main>
    );
}