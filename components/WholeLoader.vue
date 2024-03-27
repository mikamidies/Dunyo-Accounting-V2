<template>
  <div class="wrap">
    <video muted autoplay playsinline loop src="/logo.mp4" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #161d53;
  transition: 0.4s;
}
.wrap video {
  width: 420px;
  height: 420px;
}
@media screen and (max-width: 1024px) {
  .wrap video {
    width: 220px;
    height: 220px;
  }
}
</style>
