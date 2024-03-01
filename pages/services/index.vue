<template>
  <div class="master">
    <SiteTop />
    <HomeServices class="grid" />
    <HomeContacts />
  </div>
</template>

<script>
export default {
  layout: "white",
};
</script>

<style scoped>
.grid {
  padding: 0 0 120px 0;
}
.grid :deep(.title) {
  display: none;
}
</style>
