export default {
  async getMedia(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/media", {
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
