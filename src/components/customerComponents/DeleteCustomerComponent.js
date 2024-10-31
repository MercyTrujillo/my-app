import React, { useEffect, useState } from "react";
import CustomerService from "../../services/CustomerService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const DeleteCustomerComponent = () => {

const navigate = useNavigate();
const {email} = useParams();



const deleteCustomer = (e) =>{
    e.preventDefault();
    CustomerService.deleteCustomer(email).then((response) =>{
        console.log(response.data);
        navigate('/customer/')
    }).catch(error =>{
        console.log(error);
    })
}


    return (
   <div>
     <button className="btn btn-success" onClick={(e) => deleteCustomer(e)}>Delete customer</button>
        <p>delete customer</p>
   </div>

   

    )
}

export default DeleteCustomerComponent;