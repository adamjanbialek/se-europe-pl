import './ThreePoint.scss';
import {BoxWithCheckboxes} from "../../components/BoxWithCheckboxes/BoxWithCheckboxes";
import {SliderRangeComponent} from "../../components/SliderRangeComponent/SliderRangeComponent";
import {TableWithTabs} from "../../components/TableWithTabs/TableWithTabs";
import {useState} from "react";

export const ThreePoint = () => {
    const [displayedItems, setDisplayedItems] = useState([0,1000000]);

    const productsData = {
        name: '3 POINT',
        description: 'We deliver and stock equipment for tractors.',
        couplings: [],
        tableData: [
            {
                artNo: 100838,
                width: 1134,
                height: 781,
                capacity: 2500,
                machineSide: '3punkt',
                equipmentSide: 'SMS/Euro',
                weight: 87
            },
            {
                artNo: 100839,
                width: 1165,
                height: 850,
                capacity: 5000,
                machineSide: '3punkt',
                equipmentSide: 'Stora BM',
                weight: 121
            },
            {
                artNo: 113542,
                width: 1184,
                height: 492,
                capacity: 2500,
                machineSide: 'Big BM/3 punkt',
                equipmentSide: 'SMS/Euro',
                weight: 134
            }
        ]
    }

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
                        <SliderRangeComponent productsData={productsData} setDiplayedItems={setDisplayedItems} />
                    </div>
                    <div className={'choice-container'}>
                        <h2>Złącze</h2>
                        <div className={'choice-container__checkboxes'}>
                            <BoxWithCheckboxes label={'Option 1'} />
                            <BoxWithCheckboxes label={'Option 2'} />
                        </div>
                    </div>
                </div>
                <TableWithTabs productsData={productsData} displayedItems={displayedItems}/>
            </section>
        </main>
    );
}