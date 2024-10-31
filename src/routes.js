import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCustomersComponent from './components/customerComponents/ListCustomersComponent';
import PrincipalPageComponent from './components/PrincipalPageComponent';
import { AddCustomerComponent } from './components/customerComponents/AddCustomerComponent';
import DeleteCustomerComponent from './components/customerComponents/DeleteCustomerComponent';



const routes = () =>{
    return(
        <Router>
        <Route exact path='/' element={<PrincipalPageComponent/>}></Route>
        <Route path='/customer' element={<ListCustomersComponent/>}></Route>
        <Route path='/add-customer' element={<AddCustomerComponent/>}></Route>
        <Route path='/edit-customer/:customerID' element={<AddCustomerComponent/>}></Route>
        <Route path='/delete-customer/:customerID' element={<DeleteCustomerComponent/>}></Route>
      </Router>
    )
}

export default routes;