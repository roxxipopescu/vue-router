import axios from "axios";

export default {
  getExistingTvs() {
    return axios.get("/TVStock.json").then((resp) => resp.data.tvs);
  },
};
