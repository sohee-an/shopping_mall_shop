import { publicRequest } from "../requestMethod";

const productApi = {
  getPrdouctApi: function getPrdouctApi(product_id) {
    return publicRequest.get(`/products/find/${product_id}`);
  },
};

export default productApi;
