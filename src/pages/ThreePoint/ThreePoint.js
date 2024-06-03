import './ThreePoint.scss';
import {BoxWithCheckboxes} from "../../components/BoxWithCheckboxes/BoxWithCheckboxes";
import {SliderRangeComponent} from "../../components/SliderRangeComponent/SliderRangeComponent";
import {TableWithTabs} from "../../components/TableWithTabs/TableWithTabs";
import {useState, useEffect} from "react";

const productsData = {
    name: '3 POINT',
    description: 'We deliver and stock equipment for tractors.',
    couplings: [],
    tableData: [
        {
            artNo: 100838,
            coupling: '3 punkt',
            width: 1134,
            height: 781,
            capacity: 2500,
            machineSide: '3punkt',
            equipmentSide: 'SMS/Euro',
            weight: 87
        },
        {
            artNo: 100839,
            coupling: '3 punkt',
            width: 1165,
            height: 850,
            capacity: 5000,
            machineSide: '3punkt',
            equipmentSide: 'Stora BM',
            weight: 121
        },
        {
            artNo: 113542,
            coupling: 'Big BM / 3 punkt',
            width: 1184,
            height: 492,
            capacity: 2500,
            machineSide: 'Big BM/3 punkt',
            equipmentSide: 'SMS/Euro',
            weight: 134
        }
    ]
};

export const ThreePoint = () => {
    const [displayedItems, setDisplayedItems] = useState([0, 1000000]);
    const [checkboxes, setCheckboxes] = useState({});

    function findCheckboxes() {
        return productsData.tableData.reduce((acc, product) => {
            if (!acc.hasOwnProperty(product.coupling)) {
                acc[product.coupling] = false;
            }
            return acc;
        }, {});
    }

    useEffect(() => {
        const uniqueCheckboxes = findCheckboxes();
        setCheckboxes(uniqueCheckboxes);
    }, [productsData.tableData]);

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
                            {checkboxes && Object.keys(checkboxes).map((name, i) => {
                                return (
                                    <BoxWithCheckboxes key={i} label={name} checkboxes={checkboxes} setCheckboxes={(checkboxValue) => setCheckboxes(checkboxValue)} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <TableWithTabs productsData={productsData} displayedItems={displayedItems} checkboxes={checkboxes} />
            </section>
        </main>
    );
}