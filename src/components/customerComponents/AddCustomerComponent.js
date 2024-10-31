import React, { useEffect, useState } from "react";
import CustomerService from "../../services/CustomerService";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const AddCustomerComponent = () => {


const [name,setName] = useState (' ');
const [lastName,setLastName] = useState (' ');
const [email,setEmail] = useState (' ');
const navigate = useNavigate();
const {emailId} = useParams();

const saveOrUpdateCustomer = (e) => {
    e.preventDefault();
    const customer = {name,lastName,email};

if(emailId){
    CustomerService.updateCustomer(emailId, customer).then((response)=>{
        console.log(response.data);
        navigate('/customer')
    }).catch(error =>{
        console.log(error)
    })
   
}else{
    CustomerService.saveCustomer(customer).then((response)=>{
        console.log(response.data);
        navigate('/customer')
    }).catch(error =>{
        console.log(error)
    })
   
}



    
    
}

useEffect(() => {
    CustomerService.getClienteById(emailId).then((response) => {
        setName(response.data.name);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
    }).catch(error =>  {
        console.log(error);
    
    })
})


const title = () =>{
        return <h2 className="text-center">Add customer</h2>  
}

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">{title()}</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name</label>
                                    <input
                                    type="text"
                                    placeholder="Write your name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                   
                                </div> 
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                    type="text"
                                    placeholder="Write your  last name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                   
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Email</label>
                                    <input
                                    type="text"
                                    placeholder="Write your email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateCustomer(e)}>Save</button>
                                &nbsp;
                                <Link to='/customer' className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        


   

    )
}

export default AddCustomerComponent;