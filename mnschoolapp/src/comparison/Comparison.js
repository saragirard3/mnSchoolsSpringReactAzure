import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function Comparison() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="verticle tabs"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="District Edit" {...a11yProps(0)} />
                <Tab label="District Analysis" {...a11yProps(1)} />
                <Tab label="Statewide" {...a11yProps(2)} />
                <Tab label="Metro 48" {...a11yProps(3)} />
                <Tab label="MREA" {...a11yProps(4)} />
                <Tab label="SEE" {...a11yProps(5)} />
                <Tab label="AMSD" {...a11yProps(6)} />
                <Tab label="Other" {...a11yProps(7)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                District Edit
            </TabPanel>
            <TabPanel value={value} index={1}>
                District Analysis
            </TabPanel>
            <TabPanel value={value} index={2}>
                State Comparison
            </TabPanel>
            <TabPanel value={value} index={3}>
                Metro 48
            </TabPanel>
            <TabPanel value={value} index={4}>
                MREA
            </TabPanel>
            <TabPanel value={value} index={5}>
                SEE
            </TabPanel>
            <TabPanel value={value} index={6}>
                AMSD
            </TabPanel>
            <TabPanel value={value} index={7}>
                Other
            </TabPanel>
        </Box>
    );
}