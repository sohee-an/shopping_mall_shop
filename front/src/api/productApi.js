import axios from "axios";

const productApi = {
  getPrdouctApi: function getPrdouctApi(product_id) {
    return axios.get(`/api/products/find/${product_id}`);
  },
};

export default productApi;
