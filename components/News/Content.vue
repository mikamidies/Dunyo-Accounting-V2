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
        <p class="date">10.02.2000</p>
      </div>
      <section>
        <h1 class="title">Corporate Bank Account Opening Super Bowl ads</h1>

        <img src="@/assets/img/new.jpg" alt="" class="pic" />

        <div class="html marginless">
          <p>
            Шифокорлар қиролга амбулатор даволаниш вақтида давлат вазифаларини
            бажаришдан воз кечишни тавсия қилган бўлса-да, у давлат ишлари билан
            шуғулланишда ва қоғозлар билан ишлашда давом этади. Монархнинг
            расмий вазифаларига парламент томонидан қабул қилинган қонунларни
            имзолаш киради. Чарльз III қироллик имзоси талаб қилинадиган
            ҳужжатларни, шунингдек, Вазирлар Маҳкамаси аъзоларидан ҳисоботларни
            ҳар куни эрталаб қизил портфелда олади.
          </p>
          <p>
            Бундан ташқари, Қирол ҳар ҳафта Бош вазирни Букингем саройида қабул
            қилиб, мамлакат ва дунёдаги энг муҳим воқеаларни муҳокама қилади.
            Британия матбуоти хабарларига кўра, бундай учрашувлар давом
            эттирилади.
          </p>
          <p>
            Букингем саройи шифокорлар Чарльз III да саратоннинг қайси турини
            аниқлаганига аниқлик киритмаган, ваҳоланки, Британия оммавий ахборот
            воситаларининг хабарларига кўра, гап простата саратони ҳақида
            кетмаяпти, унинг катталашиши туфайли ўтган ойда Қирол шифохонага
            ётқизилган ва простата безида операция қилинган. Жараён давомида
            шифокорлар ташвишнинг яна бир сабабини аниқлаган ва тестлар
            монархнинг саратон касаллигига чалинганини тасдиқлаган. Чарльз III
            аллақачон даволаниш курсини бошлаган, у амбулатория шароитида ўтади.
          </p>

          <img src="@/assets/img/new.jpg" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
