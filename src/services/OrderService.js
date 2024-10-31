import axios from "axios";
const ORDER_BASE_REST_API_URL ="http://localhost:8085/order";

class OrderService{

 

    getOrderById(orderId){
        return axios.get(ORDER_BASE_REST_API_URL+"/"+orderId);
    }

    createOrder(order){
        return axios.post(ORDER_BASE_REST_API_URL, order);
    }

   

}


export default new OrderService();