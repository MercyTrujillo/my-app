import React, { useState } from "react";
import OrderService from "../../services/OrderService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const AddOrderComponent = () => {

const [extraDiscount,setExtraDiscount] = useState (' ');
const [customerID,setCustomerID] = useState (' ');
const [productID,setProductID] = useState (' ');
const [quantity,setQuantity] = useState (' ');
const navigate = useNavigate();


const createOrder = (e) => {
    e.preventDefault();

    const order = {
        extraDiscount,
        customerID,
        products: {
            productID,
            quantity
         
        }
    };


    
    

    OrderService.createOrder(order).then((response)=>{
        console.log(response.data);
        navigate('/')
    }).catch(error =>{
        console.log("order cant be created",error)
    })
}




const title = () =>{
        return <h2 className="text-center">Create Order</h2>  
}

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">{title()}</h2>
                        <div className="card-body">
                            <form  > 

                            
                                                        
                                <div className="form-group mb-2">
                                    <label className="form-label">Products</label>
                                    <input
                                    type="text"
                                    placeholder="Write product name"
                                    name="name"
                                    className="form-control"
                                    value={productID}
                                    onChange={(e) => setProductID(e.target.value)}
                                    />
                                   </div> 

                                <div className="form-group mb-2">
                                    <label className="form-label">quantity</label>
                                    <input
                                    type="text"
                                    placeholder="Write description of the product"
                                    name="description"
                                    className="form-control"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    /> 
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Discount</label>
                                    <input
                                    type="text"
                                    placeholder="Write the price of the product"
                                    name="price"
                                    className="form-control"
                                    value={extraDiscount}
                                    onChange={(e) => setExtraDiscount(e.target.value)}
                                    />
                                </div>


                                <div className="form-group mb-2">
                                    <label className="form-label">Quantity</label>
                                    <input
                                    type="text"
                                    placeholder="Write the tax of the product"
                                    name="tax"
                                    className="form-control"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>

                              

                                
                        

                                <button className="btn btn-success" onClick={(e) => createOrder(e)}>Save</button>
                                &nbsp;
                                <Link to='/products' className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        


   

    )
}

export default AddOrderComponent;