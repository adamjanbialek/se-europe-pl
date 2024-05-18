import './DropdownMenu.scss';

import React from "react";
import {Button, Menu, MenuItem} from "@mui/material";

export const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
            >
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <MenuItem onClick={handleClose}>3 punkt</MenuItem>
                <MenuItem onClick={handleClose}>Atlas</MenuItem>
                <MenuItem onClick={handleClose}>Avant</MenuItem>
            </Menu>
        </div>
    );
}