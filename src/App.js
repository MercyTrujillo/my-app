import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import ListCustomersComponent from './components/customerComponents/ListCustomersComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import PrincipalPageComponent from './components/PrincipalPageComponent';
import { AddCustomerComponent } from './components/customerComponents/AddCustomerComponent';
import DeleteCustomerComponent from './components/customerComponents/DeleteCustomerComponent';
import AddProductsComponent from './components/productsComponent/AddProductsComponent';
import AddOrderComponent from './components/orderComponent/AddOrderComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginComponent from './components/orderComponent/LoginComponent';
import LoginButton from './components/orderComponent/LoginComponent';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
 
const clientId = '159722101554-nkscqrjj9o6v6e66vktpuq8foi8dr1ja.apps.googleusercontent.com';
const [user, setUser] = useState({});

  return (
  
<div>


  
  <BrowserRouter>
  <HeaderComponent/>
  <Provider store={store}>
  
  <div className='container'>
    <Routes>
      <Route exact path='/' element={<PrincipalPageComponent/>}></Route>
      <Route path='/customer' element={<ListCustomersComponent/>}></Route>
      <Route path='/add-customer' element={<AddCustomerComponent/>}></Route>
      <Route path='/edit-customer/:email' element={<AddCustomerComponent/>}></Route>
      <Route path='/delete-customer/:email' element={<DeleteCustomerComponent/>}></Route>
      <Route path='add-product' element={<AddProductsComponent/>}></Route>
      <Route path='/order' element={<AddOrderComponent/>}></Route>
      <Route path='/order/login' element={<LoginComponent/>}></Route>
    </Routes>
   

  </div>
  </Provider>
 
  {/* <FooterComponent/> */}
  </BrowserRouter>
  


</div>

  );
}

export default App; //hace que nuestro componente App este disponible para otros modulos
