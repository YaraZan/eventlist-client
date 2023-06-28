<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header></Header>
    <div class="profile__container">
        <div class="profile__user-wrapper">
            <img src="@/img/default-user-pfp-orange.png" alt="" class="profile__image">
            <div class="profile__credentials-wrapper">
                <span class="profile__name">{{ name }}</span>
                <span class="profile__email">{{ email }}</span>
            </div>
        </div>
        <div class="profile__buttons-wrapper">
            <button @click="logout" class="profile__logout">Выход</button>
            <button class="profile__settings">Настроить профиль</button>
        </div>
        <div class="profile__links-wrapper">
            <router-link :to="{ name: 'organisations'}" class="profile__link">
                <span class="profile__link-name">Организации</span>
            </router-link>
            <router-link :to="{ name: 'works'}" class="profile__link">
                <span class="profile__link-name">Работа</span>
            </router-link>
            <router-link :to="{ name: 'signs'}" class="profile__link">
                <span class="profile__link-name">Участие</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { EventlistAPI } from '@/api/EventlistAPI';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    components: {Header},
    data() {
        return {
            name: null,
            email: null,
        }
    },
    created() {
        this.loadUserData()
    },
    methods: {
        loadUserData() {
            EventlistAPI.validate(localStorage.getItem('token'))
                .then(response => {
                    if (response.status === 200) {
                        this.name = response.data.data.name,
                        this.email = response.data.data.email
                    } else {
                        alert('Доступ запрещён')
                    }
                })
                .catch(error => {
                console.log(error)
              })
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>
.profile__container {
    padding: 44px 189px 0 189px;
    display: flex;
    flex-direction: column;
}
.profile__user-wrapper {
    display: flex;
    align-items: center;
}
.profile__image {
    width: 62px;
    height: 62px;
}
.profile__credentials-wrapper {
    margin-left: 28px;
    display: flex;
    flex-direction: column;
}
.profile__name {
    font-weight: 700;
    font-size: 14.2056px;
    line-height: 17px;
    color: #000000;
}
.profile__email {
    margin-top: 5px;
    font-weight: 400;
    font-size: 11.9641px;
    line-height: 15px;
    color: #B7ACAC;
}
.profile__buttons-wrapper {
    margin-top: 28px;
    display: flex;
    align-items: center;
}
.profile__logout {
    border: none;
    background: #F6F6F6;
    border-radius: 5px;
    font-weight: 600;
    font-size: 10.7637px;
    line-height: 13px;
    color: #828282;
    padding: 11px 14px;
    cursor: pointer;
}
.profile__settings {
    margin-left: 9px;
    border: 0.715302px solid rgba(0, 0, 0, 0.1);
    background: transparent;
    border-radius: 5px;
    font-weight: 500;
    font-size: 10.7637px;
    line-height: 13px;
    color: #000000;
    padding: 11px 14px;
    cursor: pointer;
}
.profile__links-wrapper {
    margin-top: 100px;
    display: flex;
    padding-bottom: 30px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}
.profile__link {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.profile__link.active .profile__link-name {
    color: #000000;
}
.profile__link:not(:last-child) {
    margin-right: 50px;
}
.profile__link-name {
    font-weight: 600;
    font-size: 13.65px;
    line-height: 17px;
    color: #828282;
}
</style>