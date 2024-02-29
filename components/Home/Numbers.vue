<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        Copper tubes for plumbing and industries, for more than 50 years
      </h4>
      <div class="items">
        <div class="item">
          <div class="num">
            <p>100+</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">
            Personalized Advice for Wealth Managemen Personalized Advice
          </p>
        </div>
        <div class="item">
          <div class="num">
            <p>50%</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">Personalized Advice for Wealth Managemen</p>
        </div>
        <div class="item">
          <div class="num">
            <p>204</p>
            <video src="/num.mp4" loop playsinline autoplay muted></video>
          </div>
          <p class="sub">
            Personalized Advice for Wealth Managemen Personalized
          </p>
        </div>
      </div>
    </div>
    <img src="@/assets/img/hero-bird.png" class="bird" alt="" />
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
.num {
  font-size: 144px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  position: relative;
  margin-bottom: 24px;
  color: #216fbf;
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
</style>
