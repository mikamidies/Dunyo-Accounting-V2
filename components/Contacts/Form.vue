<template>
  <div class="wrap">
    <div class="container small">
      <div class="items">
        <div class="item">
          <p class="sup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.translations["main.email"] }}
          </p>
          <a :href="`mailto:${info?.email}`" class="value">
            {{ info?.email }}
          </a>
        </div>
        <div class="item">
          <p class="sup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.translations["main.enter-number"] }}
          </p>
          <a :href="`tel:${info?.nbm}`" class="value">{{ info?.nbm }}</a>
        </div>
        <div class="item">
          <p class="sup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 7.25927C14 10.5321 10.25 14.6667 8 14.6667C5.75 14.6667 2 10.5321 2 7.25927C2 3.98647 4.68629 1.33334 8 1.33334C11.3137 1.33334 14 3.98647 14 7.25927Z"
                stroke="white"
              />
              <path
                d="M10 7.33334C10 8.43791 9.10457 9.33334 8 9.33334C6.89543 9.33334 6 8.43791 6 7.33334C6 6.22877 6.89543 5.33334 8 5.33334C9.10457 5.33334 10 6.22877 10 7.33334Z"
                stroke="white"
              />
            </svg>
            {{ $store.state.translations["main.office"] }}
          </p>
          <a href="" class="value">{{ info?.adres }}</a>
        </div>
      </div>
      <div class="form">
        <h4 class="title">
          {{ $store.state.translations["main.form-title"] }}
        </h4>
        <p class="sub">
          {{ $store.state.translations["inner.form-sub"] }}
        </p>
        <form @submit.prevent="onSubmit">
          <div class="inputs">
            <input
              type="number"
              :placeholder="$store.state.translations[`main.enter-number`]"
              required
              v-model="number"
            />
            <input
              type="email"
              :placeholder="$store.state.translations[`main.enter-email`]"
              required
              v-model="email"
            />
          </div>
          <textarea
            :placeholder="$store.state.translations[`main.comments`]"
            v-model="message"
          ></textarea>
          <div class="bottom">
            <div class="check">
              <input type="checkbox" id="checker" required />
              <label for="checker"
                >{{ $store.state.translations["main.privacy"] }}
              </label>
            </div>
            <button type="submit">
              {{ $store.state.translations["main.submit"] }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0303 4.96967C14.3232 5.26256 14.3232 5.73744 14.0303 6.03033L10.0303 10.0303C9.73744 10.3232 9.26256 10.3232 8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967L11.6893 6.25L1.5 6.25C1.08579 6.25 0.75 5.91421 0.75 5.5C0.75 5.08579 1.08579 4.75 1.5 4.75L11.6893 4.75L8.96967 2.03033C8.67678 1.73744 8.67678 1.26256 8.96967 0.96967C9.26256 0.676776 9.73744 0.676776 10.0303 0.96967L14.0303 4.96967Z"
                  fill="#866719"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24318.230715378766!2d55.18029898379754!3d25.036564084364667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6da7e9fc9149%3A0xddf5aae046fe3037!2sGAL%20Business%20Center%20-%20Serviced%20Offices%20%26%20Coworking%20Spaces%20in%20Dubai!5e0!3m2!1sen!2sae!4v1709823766538!5m2!1sen!2sae"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="bottomer">
        <p>Copyright © 2024 Dunyo Accounting LLC</p>

        <div class="by">by <a href="#">NDC</a></div>
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
  background: #023475;
  padding: 80px 0 40px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 80px;
}
.sup {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #0f4f8e;
}
.value {
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.title {
  margin-bottom: 16px;
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  text-transform: uppercase;
}
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 40px;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}
.inputs input {
  color: #90a7c4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding-bottom: 8px;
  border-bottom: 1px solid #2c7ccc;
}
textarea {
  width: 100%;
  min-height: 133px;
  resize: none;
  background: transparent;
  color: #90a7c4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #2c7ccc;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 120px;
}
.check {
  display: flex;
  align-items: center;
  gap: 12px;
}
.check label {
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.bottom button {
  border-radius: 8px;
  background: var(--yellow, #f9e567);
  padding: 12px 40px;
  color: var(--Dark-yellow, #866719);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 220px;
}
iframe {
  width: 100%;
  height: 679px;
  border-radius: 8px;
  filter: invert(90%);
}

.bottomer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
}
.bottomer p {
  color: #90a7c4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.bottomer ul {
  display: flex;
  align-items: center;
  gap: 48px;
  justify-content: center;
}
.by {
  text-align: end;
}
.bottomer a {
  color: var(--White, #fff) !important;
  white-space: nowrap;
  text-decoration: underline;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.by {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.by a {
  color: #f9e567 !important;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 40px;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  }
  .sup {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 4px;
    padding-bottom: 4px;
  }
  .value {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .sup svg {
    width: 16px;
    height: 16px;
  }
  .title {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }
  .inputs input {
    width: 100%;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  textarea {
    min-height: 80px;
  }
  .bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 48px;
  }
  .check label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .x {
    top: 10px;
    right: 10px;
  }
  .x svg {
    width: 24px;
    height: 24px;
  }
  .bottom button {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    width: 100%;
    padding: 10px 24px;
  }
  iframe {
    height: 400px;
    border-radius: 8px;
  }
  .bottomer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
