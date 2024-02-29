<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        Manage all areas companies that are genuinely involved specialists
      </h4>
      <div class="grid">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/person-1.jpg" alt="" />
          </div>
          <p class="name">Rustamov G’ayrat</p>
          <p class="status">Генеральный директор</p>
          <a href="#" class="mail"> info@dunyo.ae </a>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/person-2.jpg" alt="" />
          </div>
          <p class="name">Rustamov G’ayrat</p>
          <p class="status">Генеральный директор</p>
          <a href="#" class="mail"> info@dunyo.ae </a>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/person-3.jpg" alt="" />
          </div>
          <p class="name">Rustamov G’ayrat</p>
          <p class="status">Генеральный директор</p>
          <a href="#" class="mail"> info@dunyo.ae </a>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/person-4.jpg" alt="" />
          </div>
          <p class="name">Rustamov G’ayrat</p>
          <p class="status">Генеральный директор</p>
          <a href="#" class="mail"> info@dunyo.ae </a>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/person-5.jpg" alt="" />
          </div>
          <p class="name">Rustamov G’ayrat</p>
          <p class="status">Генеральный директор</p>
          <a href="#" class="mail"> info@dunyo.ae </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
