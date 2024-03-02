<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <img v-for="item in media" :key="item.id" :src="item.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["media"],
};
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
img:nth-child(1) {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
}
img:nth-child(2) {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 3;
}
img:nth-child(3) {
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 4;
}
img:nth-child(4) {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 3;
}
img:nth-child(5) {
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 4;
}
img:nth-child(6) {
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
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 48px;
  }
  .grid {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
  }
  .grid::-webkit-scrollbar {
    display: none;
  }
  .grid {
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-right: -16px;
    padding-right: 16px;
  }
  img {
    width: 270px;
    height: 164px;
    object-fit: cover;
  }
}
</style>
