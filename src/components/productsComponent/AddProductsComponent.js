import React, { useRef, useState } from "react";
import PrincipalPageService from "../../services/PrincipalPageService";
import { Link, useNavigate } from "react-router-dom";




export const AddProductsComponent = () => {
    const [description, setDescription] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [tax, setTax] = useState('');
    const [discount, setDiscount] = useState('');
    
    const [msg, setMsg] = useState(null);

    const navigate = useNavigate();




    const saveProduct = async (e) => {
        e.preventDefault();

        const product={description,productName
        };

        const pricing = {
            price: price,
            tax: tax,
            discount: discount,
        };

       

        try {
            await PrincipalPageService.saveProduct(pricing);
        
            setMsg("Product added successfully!");
            navigate('/products');
        } catch (error) {
            console.error("Product can't be added", error);
            
            setMsg("Failed to add product.");
        }
    };

   

    const title = () => {
        return <h2 className="text-center">Add Products</h2>;
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">{title()}</h2>
                        <div className="card-body">
                            {msg && <div className="alert alert-info">{msg}</div>}
                            <form onSubmit={saveProduct}>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Write product name"
                                        className="form-control"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Description</label>
                                    <input
                                        type="text"
                                        placeholder="Write description of the product"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="number"
                                        placeholder="Write the price of the product"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Tax</label>
                                    <input
                                        type="number"
                                        placeholder="Write the tax of the product"
                                        className="form-control"
                                        value={tax}
                                        onChange={(e) => setTax(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Discount</label>
                                    <input
                                        type="number"
                                        placeholder="Write the discount of the product"
                                        className="form-control"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                    />
                                </div>

                                 <div className="form-group mb-2">
                                   
                                    <input
                                        type="file"
                                        id ="image"
                                    />
                              
                              
                               
                                </div> 
                                &nbsp;
                              
                                <button type="submit" className="btn btn-success" onClick={(e) => saveProduct(e)}>Save</button>
                                &nbsp;
                                <Link to='/' className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductsComponent;
