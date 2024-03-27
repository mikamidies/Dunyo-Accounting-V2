<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations["main.about-title"] }}
      </h4>
      <div class="texts">
        <div class="left">
          <p class="txt">
            {{ $store.state.translations["about.text-1"] }}
          </p>
          <p>
            {{ $store.state.translations["about.text-2"] }}
          </p>
        </div>
        <div class="right">
          <p>
            <span>{{ $store.state.translations["about.text-span"] }}</span>
            {{ $store.state.translations["about.text-3"] }}
          </p>
          <!-- <img src="@/assets/img/logo/sign.png" class="sign" alt="" /> -->
        </div>
      </div>
      <!-- <div class="nums">
        <HomeNumbers class="nums" />
      </div> -->
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
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 48px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .texts {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .left p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .right p {
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    line-height: 140%;
    display: flex;
  }
  .nums :deep(.container) {
    padding: 0;
  }
}
</style>
