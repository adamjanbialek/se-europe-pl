import './ThreePoint.scss';
import {BoxWithCheckboxes} from "../../components/BoxWithCheckboxes/BoxWithCheckboxes";
import {SliderRangeComponent} from "../../components/SliderRangeComponent/SliderRangeComponent";
import {TableWithTabs} from "../../components/TableWithTabs/TableWithTabs";
import {useState, useEffect} from "react";

const productsData = {
    name: '3 punkt',
    description: 'Zajmujemy się dostawą i magazynowaniem osprzętu do ciągników.',
    couplings: [],
    tableData: {
        adapter: [
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
        ],
        stengrep: [
            {
                artNo: 113224,
                coupling: '3 punkt',
                width: 2000,
                height: 600,
                depth: 1000,
                horn: 35,
                bump: 'JA',
                weight: 335
            },
        ]
    }
};

export const ThreePoint = (props) => {
    const [displayedItems, setDisplayedItems] = useState([0, 1000000]);
    const [checkboxes, setCheckboxes] = useState({});

    function findCheckboxes() {
        return Object.values(props.products.tableData).flat().reduce((acc, product) => {
            if (!acc.hasOwnProperty(product.coupling)) {
                acc[product.coupling] = false;
            }
            return acc;
        }, {});
    }

    useEffect(() => {
        const uniqueCheckboxes = findCheckboxes();
        setCheckboxes(uniqueCheckboxes);
    }, [props.products.tableData]);

    return (
        <main>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>{props.products.name}</h1>
                    <p className={'paragraph paragraph--medium'}>{props.products.description}</p>
                </div>
                <div className={'available-choices-container'}>
                    <div className={'choice-container'}>
                        <h2>Waga Maszyny</h2>
                        <SliderRangeComponent productsData={props.products} setDiplayedItems={setDisplayedItems} />
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
                <TableWithTabs productsData={props.products} displayedItems={displayedItems} checkboxes={checkboxes} />
            </section>
        </main>
    );
}