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

  async asyncData({ $axios, params, query, i18n }) {
    const post = await newsApi.getPost(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      post,
    };
  },
};
</script>

<style></style>
