import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './components/dashboard';
import Employees from './components/employees';
import AddEmployee from './components/addemployee';
import MiniDrawer from './components/drawer';
import BasicTable from './components/temp';
import RouterTwo from './router/routertwo';
import SalarySlip from './components/addPayslip';
function App() {
  return (
    <div className="App">
       {/* <MiniDrawer /> */}
       {/* < BasicTable /> */}
       {/* < AddPaySlip /> */}
       <RouterTwo />
       {/* <SalarySlip /> */}
    </div>
  );
}

export default App;


// npm i -g json-server
// json-server --watch db.json
// json-server --watch db.json port --3100
// for edit - put or patch, fetch - get, add-post,delete(id)

