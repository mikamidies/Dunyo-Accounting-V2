<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        Proven Methods to Master Your Financial Landscape and Achieve Success
      </h4>
      <div class="texts">
        <div class="left">
          <p class="txt">
            At EY, our purpose is Building a better working world. The insights
            and quality services we provide help build trust and confidence in
            the capital markets and in economies the world over.
          </p>
          <p>
            We develop outstanding leaders who team to deliver on our promises
            to all our stakeholders. In so doing, we play a critical role in
            building a better working world for our people, for our clients and
            for our communities
          </p>
        </div>
        <div class="right">
          <p>
            <span>Our purpose</span> — Building a better working world — is the
            foundation of our culture
          </p>
          <img src="@/assets/img/logo/sign.png" class="sign" alt="" />
        </div>
      </div>
      <div class="nums">
        <HomeNumbers />
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
  padding-bottom: 120px;
  background: var(--Elegan-dark-blue, #023475);
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 72px;
  max-width: 955px;
}
.nums :deep(.wrap) {
  padding-bottom: 0;
}
.nums :deep(.bird) {
  display: none;
}
.texts {
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 40px;
}
.left p {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
}
.right p {
  color: #8099ba;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  line-height: 140%;
  max-width: 324px;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
}
.right span {
  color: #f9e567;
}
</style>
