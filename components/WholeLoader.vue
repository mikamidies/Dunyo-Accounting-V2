<template>
  <div class="wrap">
    <img src="@/assets/img/logo/gif.gif" alt="" />
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
  background: black;
  transition: 0.4s;
}
.wrap img {
  width: 660px;
  height: 660px;
}
</style>
