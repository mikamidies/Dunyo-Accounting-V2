<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <h4 class="title">Contact us</h4>
        <div class="right">
          <div class="item">
            <p class="sup">Head office:</p>
            <p class="value">
              {{ info?.adres }}
            </p>
          </div>
          <div class="item">
            <p class="sup">E-mail:</p>
            <a :href="`mailto:${info?.email}`" class="value">{{
              info?.email
            }}</a>
          </div>
          <div class="item">
            <p class="sup">Head office:</p>
            <a :href="`tel:${info?.nbm}`" class="value">{{ info?.nbm }}</a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="form">
          <h4 class="par">
            Get in Touch: Reach Out to Us for Expert Financial Assistance
          </h4>
          <form @submit.prevent="onSubmit">
            <input
              type="number"
              placeholder="Phone number"
              required
              v-model="number"
            />
            <input type="email" placeholder="E-mail" required v-model="email" />
            <input type="text" placeholder="Comments" v-model="message" />
            <div class="check">
              <input type="checkbox" id="check" required />
              <label for="check"
                >I agree to the terms of the Privacy Policy
              </label>
            </div>

            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M18.5 16V14.3541C18.5 13.5363 18.0021 12.8008 17.2428 12.4971L15.2086 11.6835C14.2429 11.2971 13.1422 11.7156 12.677 12.646L12.5 13C12.5 13 10 12.5 8 10.5C6 8.5 5.5 6 5.5 6L5.85402 5.82299C6.78438 5.35781 7.20285 4.25714 6.81654 3.29136L6.00289 1.25722C5.69916 0.497903 4.96374 0 4.14593 0H2.5C1.39543 0 0.5 0.89543 0.5 2C0.5 10.8366 7.66344 18 16.5 18C17.6046 18 18.5 17.1046 18.5 16Z"
                  fill="white"
                />
              </svg>
              Связаться с нами
            </button>
          </form>
        </div>

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115443.10146065187!2d51.4295958365811!3d25.284141439752798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2z0JTQvtGF0LAsINCa0LDRgtCw0YA!5e0!3m2!1sru!2s!4v1709202425995!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from "@/api/form";
import infoApi from "@/api/info";

export default {
  data() {
    return {
      modalHandle: false,
      number: "",
      email: "",
      message: "",

      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;
  },

  methods: {
    async onSubmit() {
      const formData = {
        email: this.email,
        number: this.number,
        message: this.message,
      };

      const res = await formApi.sendForm(formData);

      if (res && res.status === 201) {
        this.$notification["success"]({
          message: "Succesfully sent!",
        });
      } else {
        this.$notification["error"]({
          message: "Error!",
        });
      }

      this.email = "";
      this.number = "";
      this.message - "";

      this.closeModal();
    },

    openModal() {
      this.modalHandle = true;
    },

    closeModal() {
      this.modalHandle = false;
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
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
}
.top {
  display: grid;
  grid-template-columns: 347px 1fr;
  margin-bottom: 24px;
  align-items: flex-start;
  gap: 16px;
}
.right {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  gap: 16px;
}
.sup {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  margin-bottom: 8px;
}
.value {
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.form {
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px;
  min-height: 600px;
}
.bottom {
  display: grid;
  grid-template-columns: 347px 1fr;
  gap: 16px;
}
.par {
  color: var(--Dark-blue, #1d1931);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
input {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding-bottom: 16px;
  border-bottom: 1px solid #dddfe2;
  margin-bottom: 40px;
}
.check {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 50px;
}
.check label {
  color: var(--Dark-blue, #1d1931);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.form button {
  border-radius: 8px;
  background: #03509f;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  height: 66px;
}
.map iframe {
  width: 100%;
  min-height: 100%;
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
  }
  .top {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .right {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .sup {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }
  .value {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .par {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 24px;
  }
  input {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }
  .check {
    align-items: center;
    margin-bottom: 18px;
  }
  .check input {
    margin: 0;
  }
  .check label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .form button {
    width: 100%;
    padding: 10px 24px;
    height: 40px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    gap: 8px;
  }
  .bottom {
    grid-template-columns: repeat(1, 1fr);
  }
  .form {
    min-height: auto;
  }
  .bottom iframe {
    height: 320px;
  }
}
</style>
