import React, { useState } from "react";
import OrderService from "../../services/OrderService";
import { json, useNavigate } from "react-router-dom";
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect} from 'react';
import '../../css/card.css';
import { current } from "@reduxjs/toolkit";
import CustomerService from "../../services/CustomerService";

export const LoginComponent = () => {

const clientId = '159722101554-nkscqrjj9o6v6e66vktpuq8foi8dr1ja.apps.googleusercontent.com';
const [user, setUser] = useState(null);
const navigate = useNavigate();








//inicia el googleClient
useEffect(()=> {
    const start = () =>{
      gapi.auth2.init({
        clientId:clientId,
        scope: '',

      });
    }
    gapi.load("client:auth2", start)
  },[]);


    const onSuccess = (response) =>{
        console.log("login success from user")
        const profile = response.profileObj;
        setUser(profile);
        console.log("profile"+JSON.stringify(response.profileObj));
        localStorage.setItem("name", profile.givenName);
        localStorage.setItem("lastName", profile.familyName);
        localStorage.setItem("email",profile.email);
     if(!localStorage.getItem("userSaved")){
      saveDataUser(profile.givenName, profile.familyName, profile.email);
      localStorage.setItem("userSaved","true");
     }
     
        
    };


  const saveDataUser =(name, lastName, email)=>{


    const customer = {
      name : name,
      lastName : lastName,
      email: email,
    }
   

 
      try{
        
          CustomerService.saveCustomer(customer);
          console.log("ya existe");
        
     
    } catch(error){
      console.log("Error to save data user");
    }
  };

  const onFailure =(response)=>{
    console.log("something went wrong", response )
  };


  
function deleteCookie(name, domain) {
  document.cookie = name + '=; Path=/; Domain=' + domain + + new Date(0).toUTCString();
  console.log("MiFecha: " + new Date(0).toUTCString())

}

  const handleLogout= ()=>{
    setUser(null);
    localStorage.clear();
    console.log("user logout");
    deleteCookie('__Host-GAPS', 'accounts.google.com');
   
  };

  
  


    return (
        <div className='center'>
      
        {!user ?(
        <GoogleLogin
       clientId={clientId} 
       onSuccess={onSuccess}
       onFailure={onFailure}
       buttonText="Sing In"
       cookiePolicy={"single_host_origin"}
       isSignedIn={true} //hace la persistencia de la sesion
       />
         

        ):(
          <>
          
        <div className='profile'>
           <img className="imageUrl" src={user.imageUrl} alt="profile"/> 
          <h4>Hello {user.name}</h4> 
         
        </div>
      <GoogleLogout
      clientId={clientId}
      buttonText="salir"
      onLogoutSuccess={handleLogout}
      />
          </>
        )}

      </div>
   

    )
}

export default LoginComponent;