<template>
  <main>
    <DesktopHeader />
    <div class="site">
      <nuxt />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.site {
  flex: 1;
}
</style>
