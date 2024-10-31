import React, { useEffect, useState } from "react";
import CustomerService from "../../services/CustomerService";
import { Link } from "react-router-dom";

export const ListCustomersComponent = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null); 
    const[email, setEmail] = useState(null);


    useEffect(() => {
       
        CustomerService.getAllCustomers()
            .then(response => {
                setCustomers(response.data); 
                console.log(response.data);  
            })
            .catch(error => {
                setError(error);           
                console.error(error);       
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">Customer List</h2>
            {/* <Link to = "/add-customer" className="btn btn-primary mb-2">Add Customer</Link>  */}
            {error && <p className="text-danger">Error: {error.message}</p>} {}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        {/* <th>Acciones</th> */}
                    </tr>
                </thead>
                <tbody>
                    {customers.length > 0 ? (
                        customers.map(customer => (
                            <tr key={customer.email}>
                                <td>{customer.name}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-customer/${customer.email}`} >Update</Link>
                                    {/* <Link className="btn btn-danger" to={`/delete-customer/${customer.email}`}>Delete</Link> */}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">No customers found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListCustomersComponent;
