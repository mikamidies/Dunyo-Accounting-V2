<template>
  <div class="wrap">
    <div class="sausage first"></div>
    <div class="sausage second"></div>
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations["main.numbers-title"] }}
      </h4>
      <div class="items">
        <div class="item">
          <div class="num">
            <p>100+</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">
            {{ $store.state.translations["main.number-1"] }}
          </p>
        </div>
        <div class="item">
          <div class="num">
            <p>50%</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">{{ $store.state.translations["main.number-2"] }}</p>
        </div>
        <div class="item">
          <div class="num">
            <p>204</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">
            {{ $store.state.translations["main.number-3"] }}
          </p>
        </div>
      </div>
    </div>
    <img src="@/assets/img/news-bird.png" class="bird" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: #023475;
  padding: 72px 0 86px 0;
  position: relative;
  width: 100%;
}
.first {
  position: absolute;
  left: 10%;
  top: 0px;
}
.second {
  position: absolute;
  bottom: 0;
  right: 10%;
}
.bird {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
  pointer-events: none;
}
.title {
  color: var(--White, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 48px;
  max-width: 800px;
  padding-left: 16px;
  border-left: 4px solid #f9e567;
}
.sub {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
}
.num p {
  font-size: 144px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  position: relative;
  margin-bottom: 24px;
  color: #216fbf;
  background: url(../../assets/img/number.gif);
  mix-blend-mode: color-dodge;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.num video {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}
.num p {
  position: relative;
  z-index: 2;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
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
  .num {
    margin-bottom: 8px;
  }
  .num p {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
  .bird {
    right: -30%;
  }
}
</style>
