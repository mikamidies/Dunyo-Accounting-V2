<template>
  <div class="wrap">
    <div class="container">
      <div class="crumbs">
        <ol>
          <li>
            <NuxtLink class="last" to="/"> Main </NuxtLink>
          </li>
          <li>/</li>
          <li>
            <p class="current">{{ title }}</p>
          </li>
        </ol>
      </div>
      <div class="content">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.wrap {
  background: white;
  padding: 220px 0 0 0;
}
.crumbs ol {
  gap: 8px;
  display: flex;
  align-items: center;
  color: var(--blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  justify-content: center;
  margin-bottom: 16px;
}
.crumbs a {
  color: #c2c2c3;
}
.title {
  color: var(--blue);
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.sub {
  color: var(--blue);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin: 0 auto 24px auto;
  max-width: 1064px;
}
.txt {
  color: #8099ba;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  max-width: 600px;
  margin: 0 auto;
}
</style>
