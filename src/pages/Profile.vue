<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="profile__container">
        <div class="user-profile">
            <div class="user-nav">
                <img src="@/img/default-userpfp-32.png" alt="" class="user-pfp">
                <button @click="logout()" class="log-out">Выход</button>
            </div>
            <div class="user-content">
                <span class="user__name">{{ name }}</span>
                <span class="user__email">{{ email }}</span>
                <div class="user__work-wrapper">
                    <span class="work-text">Работа</span>
                    <span class="user__work">{{ work }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    data() {
        return {
            name: null,
            email: null,
            work: ''
        }
    },
    created() {
        this.loadUserData()
    },
    methods: {
        loadUserData() {
            const data = {
                token: this.$store.getters.getToken
            }
            axios.post(`http://localhost/eventlist-api/api/user/validate_token.php`, data)
            .then(response => {
                if (response.status === 200) {
                    this.name = response.data.data.name,
                    this.email = response.data.data.email
                } else {
                    alert('Доступ запрещён')
                }
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
    padding: 0px 160px;
    display: flex;
}
.user-profile {
    padding-top: 70px;
    display: flex;
}
.user-nav {
    display: flex;
    flex-direction: column;
}
.user-content {
    padding-left: 37px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}
.user__work-wrapper {
    display: flex;
    align-items: center;
    margin-top: 70px;
}
.user__name {
    font-weight: 700;
    font-size: 19.2588px;
    line-height: 23px;
    color: #000000;
}
.user__email {
    font-weight: 400;
    font-size: 16.22px;
    line-height: 20px;
    color: #B7ACAC;
    margin-top: 7px;

}
.work-text {
    font-weight: 500;
    font-size: 15.6731px;
    line-height: 19px;
    color: #828282; 
}
.user__work {
    font-weight: 500;
    font-size: 15.6731px;
    line-height: 19px;
    color: #828282; 
}
.log-out {
    margin-top: 12px;
    border: none;
    background: #FAFAFA;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #828282;
    background-image: url('@/img/log-out-icon.png');
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: left center;
    padding: 8px 25px;
    transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    cursor: pointer;
}
.log-out:hover {
    opacity: 80%;
}
</style>