<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <img id="one" src="@/assets/img/image-1.jpg" alt="" />
        <img id="two" src="@/assets/img/image-2.jpg" alt="" />
        <img id="three" src="@/assets/img/image-3.jpg" alt="" />
        <img id="four" src="@/assets/img/image-4.jpg" alt="" />
        <img id="five" src="@/assets/img/image-5.jpg" alt="" />
        <img id="six" src="@/assets/img/image-6.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.wrap {
  background: var(--Elegan-dark-blue, #023475);
  padding-bottom: 120px;
}
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
#one {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
}
#two {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 3;
}
#three {
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 4;
}
#four {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 3;
}
#five {
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 4;
}
#six {
  grid-row-start: 3;
  grid-column-start: 3;
  grid-row-end: 4;
  grid-column-end: 4;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 0px 0px 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
}
</style>
