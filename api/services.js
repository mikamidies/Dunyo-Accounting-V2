export default {
  async getServices(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/service");

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getService(slug, axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/service/${slug}`, {});
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
