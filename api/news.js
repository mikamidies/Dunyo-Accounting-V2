export default {
  async getNews(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/news");

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getNewsCategories(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/news/categories");

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getPost(slug, axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/news/${slug}`, {});
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
