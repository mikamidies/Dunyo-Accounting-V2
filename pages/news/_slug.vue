<template>
  <div class="master">
    <NewsContent :post="post" />
    <NewsOthers :post="post" />
  </div>
</template>

<script>
import newsApi from "@/api/news.js";

export default {
  layout: "white",

  async asyncData({ params, $axios }) {
    const post = await newsApi.getPost(params.slug, $axios);

    return {
      post,
    };
  },
};
</script>

<style></style>
