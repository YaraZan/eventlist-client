<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login__container">
        <form class="login__registration-form">
            <img src="../img/logo-colorfull.png" alt="" class="login__icon">
            <span class="login__title">Приветствуем снова!</span>
            <span class="login__descr">Войдите в аккаунт</span>
            <input v-model="email" :placeholder="'Почта'" type="text" class="input email__input">
            <input v-model="pass" :placeholder="'Пароль'" type="text" class="input pass__input">
            <button class="login__signup">Войти</button>
            <div class="login__changeauth-wrapper">
                <span class="changeauth-text">Нет аккаунта?</span>
                <RouterLink class="changeauth-link" to="/Login">Зарегистрируйтесь</RouterLink>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Auth',
    data() {
        return {
            email: '',
            pass: '',
        }
    }
}
</script>

<style>

</style>