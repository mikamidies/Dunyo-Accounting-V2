<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Services</h4>
      <div class="items">
        <div v-for="item in services" :key="item.id" class="item">
          <NuxtLink :to="`/services/${item.slug}`">
            <div>
              <h2>{{ item.title }}</h2>

              <div class="texts">
                <div v-for="sub in item.data" :key="sub.id">
                  <h4>
                    <img src="@/assets/img/logo/quote.png" alt="" />
                    {{ sub.title }}
                  </h4>
                  <div class="html" v-html="sub.text"></div>
                </div>
              </div>
            </div>

            <div class="img">
              <img :src="item.image" alt="" class="pic" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7L11 12L7 17"
                    stroke="#023475"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 7L17 12L13 17"
                    stroke="#023475"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["services"],
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
  margin-bottom: 40px;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.item {
  border-radius: 8px;
  padding: 24px;
  background: var(--Apple-Grey, #f5f5f7);
}
.item a {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item:nth-child(1) {
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;
}
.item:nth-child(2) {
  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 3;
}
.item:nth-child(2) a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 0;
}
.item:nth-child(3) {
  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;
}
.item:nth-child(4) {
  grid-row-start: 2;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 2;
}
.item:nth-child(5) {
  grid-row-start: 2;
  grid-column-start: 3;

  grid-row-end: 3;
  grid-column-end: 4;
}
.name {
  margin-bottom: 16px;
  color: var(--Dark-blue, #1d1931);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 16px;
}
.pic {
  width: 100%;
  height: 177px;
  max-width: 300px;
  object-fit: cover;
}
.img {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.img button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--blue);
}
.texts {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 24px;
}
.texts h4 {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.texts img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
.html :deep(p) {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item .texts div {
  display: none;
}
.item .texts div:nth-child(1) {
  display: block;
}
.item:nth-child(2) .texts div:nth-child(2),
.item:nth-child(2) .texts div:nth-child(3) {
  display: block;
}
.html {
  display: block !important;
}
</style>
