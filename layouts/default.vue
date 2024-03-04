<template>
  <main>
    <DesktopHeader class="main__navbar" />
    <MobileHeader class="mobile__navbar" />
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
.main__navbar {
  display: block;
}
.mobile__navbar {
  display: none;
}
@media screen and (max-width: 1024px) {
  .main__navbar {
    display: none;
  }
  .mobile__navbar {
    display: block;
  }
}
</style>
