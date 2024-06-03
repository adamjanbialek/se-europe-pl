import './TableWithTabs.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {TableComponent} from "../TableComponent/TableComponent";

export const TableWithTabs = (props) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="1135mm" value="1" />
                        <Tab label="1165mm" value="2" />
                        <Tab label="1184mm" value="3" />
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <TableComponent data={props.productsData.tableData} displayedItems={props.displayedItems} checkboxes={props.checkboxes}/>
                </TabPanel>
                <TabPanel value="2">Table Two</TabPanel>
                <TabPanel value="3">Table Three</TabPanel>
            </TabContext>
        </Box>
    );
}