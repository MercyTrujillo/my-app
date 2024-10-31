import axios from "axios";
const CUSTOMER_BASE_REST_API_URL ="http://localhost:8083/customer";

class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL);
    }

    saveCustomer(customer){
        return axios.post(CUSTOMER_BASE_REST_API_URL,customer);
    }

    getCustomerById(email){
        return axios.get(CUSTOMER_BASE_REST_API_URL + '/' +email);
    }

    updateCustomer(email, customer){
        return axios.put(CUSTOMER_BASE_REST_API_URL+ '/'+email,customer);
    }

    deleteCustomer(email){
        return axios.delete(CUSTOMER_BASE_REST_API_URL+'/'+email);
    }
}


export default new CustomerService();