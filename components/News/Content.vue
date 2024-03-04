<template>
  <div class="wrap">
    <div class="container small">
      <div class="header">
        <div class="back">
          <NuxtLink to="/news">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L6 12M6 12L10 16M6 12L18 12"
                stroke="#0D0539"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            All news
          </NuxtLink>
        </div>
        <p class="date">{{ post.date }}</p>
      </div>
      <section>
        <h1 class="title">{{ post.title }}</h1>

        <img :src="post.image" alt="" class="pic" />

        <div class="html marginless" v-html="post.text"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.wrap {
  padding-top: 203px;
  padding-bottom: 80px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.back a {
  color: var(--Bg-background, #0d0539);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.date {
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.title {
  color: var(--Bg-background, #0d0539);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 40px;
}
.pic {
  width: 100%;
  height: 561px;
  object-fit: cover;
  border-radius: 8px;
  display: flex;
  margin-bottom: 40px;
}
.html p,
.html span,
.html li,
.html {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  color: var(--black);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.html a {
  color: var(--blue);
}
.html img {
  width: 100%;
  height: 561px;
  object-fit: cover;
  border-radius: 8px;
  display: flex;
  margin-bottom: 24px;
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 24px;
  }
  .back a {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .pic {
    height: 213px;
    margin-bottom: 16px;
    border-radius: 4px;
  }
  .html p,
  .html span,
  .html li,
  .html {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .wrap {
    padding: 124px 0 48px 0;
  }
}
</style>
