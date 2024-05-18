import './SliderRangeComponent.scss'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}kg`;
}

export const SliderRangeComponent = () => {
    const [value, setValue] = React.useState([0, 4500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={'slider-container'}>
            <Slider
                getAriaLabel={() => 'Capacity range'}
                value={value}
                max={6000}
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}