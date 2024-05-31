import './TableComponent.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sku, coupling, width, height, capacity) {
    return { sku, coupling, width, height, capacity };
}

const rows = [
    createData('114406', 'Big BM', 1070, 740, 2500),
    createData('113542', 'SMS', 1184, 777, 2500),
];

export const TableComponent = (props) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(props.data[0]).map(tableCell => {
                            return (<TableCell >{tableCell}</TableCell>);
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.filter(product=> {
                        return product.weight >= props.displayedItems[0] & product.weight <= props.displayedItems[1]
                    }).map(product => {
                        const fields = Object.values(product);
                        return (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {fields.map(field => {
                                    return <TableCell>{field}</TableCell>;
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}