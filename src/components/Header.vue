<template>
    <div class="header">
        <div class="header__container">
            <img src="../img/logo.png" alt="Logo" class="logo">
            <div class="header__links-wrapper">
                <router-link class="header__link header__home-link" to="/">Главная</router-link>
                <router-link to="/work" class="header__link header__work-link">Работа</router-link>
                <router-link to="/about" class="header__link header__about-link">О нас</router-link>
            </div>
            <div v-if="isAuthorized" class="header__profile-wrapper">
                <img src="@/img/notifications.png" class="notifications">
                <router-link to="/profile" href="" class="user-profile-link">
                    <img src="@/img/user-pfp-16.png" alt="">
                </router-link >
            </div>
            <div v-else class="header__button-wrapper">
                <router-link to="/auth"><button class="sign-in-btn">Вход</button></router-link>
                <router-link to="/login"><button class="sign-up-btn">Регистрация</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data() {
        return {
            isAuthorized: this.$store.getters.getAuthorized
        }
    },
    async created() {

    }
}

</script>


<style>
    .header {
        padding: 12px 21px;
    }
    .header__container {
        display: flex;
        align-items: center;
    }
    .header__links-wrapper {
        margin-left: 45px;
    }
    .header__link:not(:last-child) {
        margin-right: 40px;
    } 
    .header__link {
        font-weight: 500;
        font-size: 13.05px;
        line-height: 18px;
        text-decoration: none;
        color: #828282;
        transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    } 
    .header__link:hover {
        color: #b8b8b8;
    }
    .header__link:active {
        border-bottom: 1px solid #000000;
        color: #000000;
    }
    .header__button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    }
    .sign-in-btn {
        border: none;
        background-color: transparent;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;
        color: #828282;
        padding: 10px 17px;
        cursor: pointer;
    }
    .sign-up-btn {
        border: none;
        background: #6070FE;
        border-radius: 8px;
        padding: 10px 17px;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;

        color: #FFFFFF;
        cursor: pointer;
    }
    .header__profile-wrapper {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-profile-link {
        margin-left: 30px;
        transition: all .3s cubic-bezier(0.42, 0, 0.58, 1);
    }
    .user-profile-link:hover img {
        stroke: 2px linear-gradient(227.82deg, #6070FE -0.23%, #3D458B 106.82%);
border-radius: 2.46269px;
    }
</style>