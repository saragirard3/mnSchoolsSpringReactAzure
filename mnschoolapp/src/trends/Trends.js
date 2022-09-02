import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {FormControl, InputLabel, OutlinedInput, Select, useTheme} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ExpListButton from "../misc/ExpListButton";

export default function Trends() {



    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
        >
            <ExpListButton />
        </Box>
    );
}