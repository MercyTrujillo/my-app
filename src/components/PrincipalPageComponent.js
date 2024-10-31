import React, { useEffect, useState } from "react";
import PrincipalPageService from "../services/PrincipalPageService";
import { Link } from "react-router-dom";
import '../css/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const PrincipalPageComponent = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        PrincipalPageService.getAllProducts()
            .then(response => {
                setProducts(response.data); 
                console.log(response.data);  
            })
            .catch(error => {
                setError(error);           
                console.error(error);       
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">Products List</h2>
        
            <Link to="/add-product" className="btn btn-primary mb-2">Add Products</Link> 
           
            {error && <p className="text-danger">Error: {error.message}</p>}
                
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.productId} className="col-md-3">
                            <div className="card">
                                {/* Aquí cambiamos a la URL de la imagen del producto */}
                                <img 
                                    src={product.imageUrl} // Asumiendo que la propiedad es `imageUrl`
                                    className="card-img-top" 
                                    alt={product.productName} 
                                    onError={(e) => {
                                        e.target.src = "ruta/por/defecto.jpg"; // Ruta de una imagen por defecto
                                    }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">${product.pricing.price}</p>
                                    <Link to={`/order/${product.productId}`} className="buyProduct">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">No products found</div>
                )}
            </div>
        </div>
    );
};

export default PrincipalPageComponent;
