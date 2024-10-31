import axios from "axios";
const PRODUCT_ORDER_BASE_REST_API_URL ="http://localhost:8084/productorder";

class ProductOrderService{

 

    patchProductOrder(orderId){
        return axios.get(PRODUCT_ORDER_BASE_REST_API_URL+"/"+orderId);
    }

}


export default new ProductOrderService();