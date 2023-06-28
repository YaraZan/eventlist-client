<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login__container">
      <form @submit.prevent="onSubmit()" class="login__registration-form">
        <img src="../img/logo-colorfull.png" alt="" class="login__icon">
        <span class="login__title">Добро пожаловать!</span>
        <span class="login__descr">Создайте аккаунт</span>
        <input v-model="email" :placeholder="'Почта'" type="text" class="input email__input">
        <input v-model="name" :placeholder="'Имя'" type="text" class="input name__input">
        <input v-model="pass" :placeholder="'Пароль'" type="password" class="input pass__input">
        <input v-model="passcnf" :placeholder="'Подтверждение пароля'" type="password" class="input passcnf__input">
        <button class="login__signup">Зарегистрироваться</button>
        <div class="login__changeauth-wrapper">
          <span class="changeauth-text">Есть аккаунт?</span>
          <RouterLink class="changeauth-link" to="/auth">Войдите</RouterLink>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { EventlistAPI } from "@/api/EventlistAPI";
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
      return {
        email: '',
        name: '',
        pass: '',
        passcnf: ''
      }
    },
    methods: {
      onSubmit() {
        if (!this.email || !this.name || !this.pass || !this.passcnf) {
          alert("Заполните все поля!")
        } else if (this.pass !== this.passcnf) {
          alert("Пароли не совпадают!")
        } else {
            EventlistAPI.create(this.name, this.email, this.pass)
              .then(response => {
                if (response.status === 200) {
                  this.loginUserAndRedirect(this.email, this.pass)
                }
              })
              .catch(error => {
                console.log(error)
              })
        }
      },
      loginUserAndRedirect() {
        EventlistAPI.login(this.email, this.pass).then(res => {
          this.$store.dispatch('login', res.data.token);
          this.$router.push({name: 'Home'})
        })
      }
    }
  }
  </script>
  

<style>
    .login__container {
        margin: 0 auto;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ECECEC;
    }
    .login__registration-form {
        width: 480px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 64px 78px;
        background-color: #F2F2F2;
        border: 1px solid #DADADA;
    }
    .login__title {
        font-weight: 600;
        font-size: 22.1206px;
        line-height: 27px;
        color: #000000;
        margin-top: 25px;

    }
    .login__descr {
        font-weight: 400;
        font-size: 17.4291px;
        line-height: 21px;
        margin-top: 10px;
        margin-bottom: 25px;
        color: #757575;
    }
    .input {
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        padding: 14px;
        transition: all .3s cubic-bezier(0.42, 0, 0.58, 1);
    }
    .input:focus {
      background-color: #EEEEEE;
    }
    .input:focus,
    .input:active,
    .input:hover {
      outline: none;
    }
    .input:not(:last-child) {
        margin-bottom: 11px;
    }
    .input::placeholder {
        font-weight: 400;
        font-size: 12.8051px;
        line-height: 16px;
        color: #C9C9C9;
    }
    .login__signup {
        width: 100%;
        background: #6070FE;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15.31px;
        line-height: 19px;
        color: #E0E0E0;
        margin-top: 25px;
        padding: 14px 0;
        text-align: center;
        border: none;
        transition: all .3s cubic-bezier(0.42, 0, 0.58, 1);
    }
    .login__signup:focus {
      opacity: 80%;
    }
    .login__signup:hover {
      opacity: 80%;
    }
    .login__signup:focus,
    .login__signup:active,
    .login__signup:hover {
      outline: none;
    }
    .login__changeauth-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
    }
    .changeauth-text {
        font-weight: 400;
        font-size: 13.8146px;
        line-height: 17px;
        color: #9B9B9B;
    }
    .changeauth-link {
        font-weight: 400;
        font-size: 13.8146px;
        line-height: 17px;
        color: #6070FE;
        text-decoration: none;
        margin-left: 20px;
    }
</style>