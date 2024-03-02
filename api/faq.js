export default {
  async getFAQ(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/faq", {
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
