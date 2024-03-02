<template>
  <main>
    <DesktopHeader class="white" />
    <div class="site">
      <nuxt />
    </div>
    <DesktopFooter />
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
.white :deep(.brand-main) {
  display: none;
}
.white :deep(.brand-colored) {
  display: block;
}
.white :deep(.link),
.white :deep(.lang),
.white :deep(.tel) {
  color: var(--blue);
}
.white :deep(.tel) {
  border: 1px solid var(--grey-8, #ebebeb);
}
.white :deep(.tel svg path) {
  fill: var(--blue);
}
.white {
  background: white !important;
}
@media screen and (max-width: 1024px) {
  .white {
    display: none;
  }
}
</style>
