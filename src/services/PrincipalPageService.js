import axios from "axios";

const products_BASE_REST_API_URL = "http://localhost:8082/products";

class PrincipalPageService {
    getAllProducts() {
        return axios.get(products_BASE_REST_API_URL);
    }

    saveProduct(formData) {
        return axios.post(products_BASE_REST_API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data", //se envia como multipart
            },
        });
    }
}


export default new PrincipalPageService();
