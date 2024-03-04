export default {
  async getServices(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/service", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getService(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/service/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
