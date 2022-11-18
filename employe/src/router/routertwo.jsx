import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddPaySlip from "../components/addPayslip";
import Dashboard from "../components/dashboard";
// import AddPaySlip from "../components/addPayslip";
import MiniDrawer from "../components/drawer";
import Employees from "../components/employees";
import SalarySlip from "../components/addPayslip";
import BasicTable from "../components/temp";
import AddEmployee from "../components/addemployee";
function RouterTwo(){
    return (
        <div>
            <Router>
            <Routes>
                <Route exact path = '/' element = {<MiniDrawer />} />
                <Route  path = '/employee' element = {<Employees />} />
                <Route  path = '/add' element = {<AddEmployee />} />

                <Route  path = '/payslip' element = {<SalarySlip />} />
                <Route  path = '/dashboard' element = {<Dashboard />} />
                <Route  path = '/table' element = {<BasicTable />} />


                </Routes>
            </Router>
        </div>
    )
}
export default RouterTwo