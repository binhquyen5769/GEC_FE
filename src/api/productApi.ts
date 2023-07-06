import axios from "axios";
// const product = require("./product.postgres.json");

const productApi = {
  async getAllProduct() {
    const res = await axios.get("http://localhost:3002/products/all");
    console.log("res", res);

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
  async updateProductById(id: any, product: any): Promise<any> {
    console.log("product", product);
    const response = await axios.patch(
      `http://localhost:3002/products/${id}`,
      product
    );
    console.log("response", response);
    return response;
  },

  async createProduct(product: any): Promise<any> {
    const { properties = "", type = "" } = product;
    try {
      const res = await axios.post("http://localhost:3002/products", {
        ...product,
        properties,
        type,
      });
      alert("Tạo sản phẩm thành công");
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default productApi;
