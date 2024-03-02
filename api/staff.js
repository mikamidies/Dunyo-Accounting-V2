export default {
  async getStaff(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/workers", {
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
