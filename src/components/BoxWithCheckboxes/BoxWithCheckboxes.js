import './BoxWithCheckboxes.scss'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";

export const BoxWithCheckboxes = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <FormControlLabel control={
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        } label={props.label} />
    );
}