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

export const TableComponent = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SKU</TableCell>
                        <TableCell align="right">Złącze</TableCell>
                        <TableCell align="right">Szerokość</TableCell>
                        <TableCell align="right">Wysokość</TableCell>
                        <TableCell align="right">Udźwig</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.sku}
                            </TableCell>
                            <TableCell align="right">{row.coupling}</TableCell>
                            <TableCell align="right">{row.width}</TableCell>
                            <TableCell align="right">{row.height}</TableCell>
                            <TableCell align="right">{row.capacity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}