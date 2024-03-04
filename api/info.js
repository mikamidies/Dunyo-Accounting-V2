export default {
  async getInfo(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/static_infos");

        return res;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
