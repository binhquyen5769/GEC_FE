import axios from "axios";
// const product = require("./product.postgres.json");

const productApi = {
  async getAllProduct() {
    const res = await axios.get("http://localhost:3002/products/all");

    // const response = { data: product };
    return res;
  },
  async getProductById(id: any): Promise<any> {
    const response = await axios.get(`http://localhost:3002/products/${id}`);
    return response;
  },
  async searchProductByName(classify: any): Promise<any> {
    const response = await axios.get(
      `http://localhost:3002/products/search?classify=${classify}`
    );
    return response;
  },
};

export default productApi;
