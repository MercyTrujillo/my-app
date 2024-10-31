import React, { useEffect, useState } from "react";
import OrderService from "../../services/OrderService";

import { useParams } from "react-router-dom";

export const OrderComponent = () => {
    const [orders, setorders] = useState([]);
    
    const [error, setError] = useState(null); 

    const {orderId} = useParams();

  
    
    useEffect(() => {
       
        OrderService.getOrderById(orderId)
            .then(response => {
                setorders(response.data); 
                console.log(response.data);  
            })
            .catch(error => {
                setError(error);           
                console.error(error);       
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">Order</h2>
            
            {error && <p className="text-danger">Error: {error.message}</p>} {}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.customer.name}</td>
                                <td>{order.customer.lastName}</td>
                                <td>{order.pricing.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">No orders found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderComponent;
