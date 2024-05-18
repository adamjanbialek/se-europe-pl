import './ThreePoint.scss';
import {BoxWithCheckboxes} from "../../components/BoxWithCheckboxes/BoxWithCheckboxes";
import {SliderRangeComponent} from "../../components/SliderRangeComponent/SliderRangeComponent";
import {TableWithTabs} from "../../components/TableWithTabs/TableWithTabs";

export const ThreePoint = () => {
    return (
        <main>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>Moja złączę</h1>
                    <p className={'paragraph paragraph--medium'}>Zajmujemy się dostawą i magazynowaniem osprzętu do ciągników.</p>
                </div>
                <div className={'available-choices-container'}>
                    <div className={'choice-container'}>
                        <h2>Waga Maszyny</h2>
                        <SliderRangeComponent />
                    </div>
                    <div className={'choice-container'}>
                        <h2>Złącze</h2>
                        <div className={'choice-container__checkboxes'}>
                            <BoxWithCheckboxes label={'Option 1'} />
                            <BoxWithCheckboxes label={'Option 2'} />
                        </div>
                    </div>
                </div>
                <TableWithTabs />
            </section>
        </main>
    );
}