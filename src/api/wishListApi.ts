import axios from "axios";

const wishList = {
  async createWishListItem(data: any): Promise<any> {
    const res = await axios.post("http://localhost:3002/wish-list", data);
    return res;
  },
  async fetchWishList(userId: any): Promise<any> {
    const { data } = await axios.get("http://localhost:3002/wish-list", userId);
    return data;
  },
  async deleteWishListItem(data: any): Promise<any> {
    await axios.delete("http://localhost:3002/wish-list", data);
  },
};
export default wishList;
