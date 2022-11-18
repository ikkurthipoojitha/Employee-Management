import * as React from 'react';
import MiniDrawer from './drawer';
import { useState } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Employees from './employees';
import AddEmployee from './addemployee';
import AddPaySlip from './addPayslip';
function Dashboard(props) {
    const [toggle, setToggle] = useState(false)
    
    
    return (
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer >
               
            </MiniDrawer>
        </Box>
    )
}
export default Dashboard