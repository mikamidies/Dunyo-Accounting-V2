export default {
  async getPartners(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/partners", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
