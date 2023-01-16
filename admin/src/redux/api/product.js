import { publicRequest, userRequest } from "../../requestMethods";

const productApi = {
  addProductApi: function addProductApi(newPorduct) {
    return userRequest.get(`/products`, newPorduct);
  },
};

export default productApi;
