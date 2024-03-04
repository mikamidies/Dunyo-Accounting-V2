<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations["about.staff-title"] }}
      </h4>
      <div class="grid">
        <div class="item" v-for="item in staff" :key="item.id">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <p class="name">{{ item.title }}</p>
          <p class="status">{{ item.subtitle }}</p>
          <a :href="item.email" class="mail"> {{ item.email }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["staff"],
};
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  padding-left: 16px;
  border-left: 4px solid #bba14f;
  margin-bottom: 67px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  border-radius: 8px;
  background: #f9f9fa;
  padding: 40px;
}
.img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.img img {
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 50%;
}
.name {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  margin-bottom: 8px;
}
.status {
  color: var(--grey-64, #5d5d5f);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 8px;
}
.mail {
  color: var(--Blue, #0085ff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 48px 0;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 24px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .item {
    padding: 12px;
  }
  .img img {
    width: 120px;
    height: 120px;
  }
  .img {
    margin-bottom: 24px;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 4px;
  }
  .status,
  .mail {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 4px;
  }
}
</style>
