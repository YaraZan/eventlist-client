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
                <svg class="notifications" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.84622 6.1864C4.84622 4.95584 5.33506 3.77568 6.2052 2.90554C7.07534 2.03541 8.2555 1.54657 9.48606 1.54657C10.7166 1.54657 11.8968 2.03541 12.7669 2.90554C13.637 3.77568 14.1259 4.95584 14.1259 6.1864C14.1259 11.5995 16.4458 13.1461 16.4458 13.1461H2.52631C2.52631 13.1461 4.84622 11.5995 4.84622 6.1864Z" stroke="#828282" stroke-width="1.54661" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.1481 16.2394C8.28405 16.4738 8.47919 16.6683 8.71398 16.8035C8.94877 16.9388 9.21496 17.0099 9.48591 17.0099C9.75686 17.0099 10.0231 16.9388 10.2578 16.8035C10.4926 16.6683 10.6878 16.4738 10.8237 16.2394" stroke="#828282" stroke-width="1.54661" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg class="theme" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_351_98)">
                <path d="M8.76402 13.3438C10.7808 13.3438 12.4157 11.7089 12.4157 9.69206C12.4157 7.67527 10.7808 6.04034 8.76402 6.04034C6.74723 6.04034 5.1123 7.67527 5.1123 9.69206C5.1123 11.7089 6.74723 13.3438 8.76402 13.3438Z" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.76416 1.65826V3.11895" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.76416 16.2652V17.7259" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.08203 4.00995L4.11912 5.04704" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4092 14.337L14.4463 15.3741" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.730225 9.69208H2.19091" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.3372 9.69208H16.7978" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.08203 15.3741L4.11912 14.337" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4092 5.04704L14.4463 4.00995" stroke="#828282" stroke-width="1.46069" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_351_98">
                <rect width="17.5282" height="17.5282" fill="white" transform="translate(0 0.927917)"/>
                </clipPath>
                </defs>
                </svg>
                <router-link :to="`/profile/${public_id}/`" href="" class="user-profile-link">
                    <img class="user-profile-link-image" src="@/img/default-user-pfp-orange-16.png" alt="">
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
import { EventlistAPI } from '@/api/EventlistAPI'


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data() {
        return {
            // eslint-disable-next-line no-prototype-builtins
            isAuthorized: !!localStorage.getItem('token'),
            public_id: null
        }
    },
    created() {
        this.getUserId()
    },
    methods: {
        getUserId() {
            EventlistAPI.validate(this.$store.getters.getToken)
                .then(response => {
                    if (response.status === 200) {
                        this.public_id = response.data.data.public_id;
                    } else {
                        alert('Доступ запрещён')
                    }
                })
                .catch(error => {
                console.log(error)
              })
        }
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
        margin-left: 50px;
    }
    .header__link:not(:last-child) {
        margin-right: 50px;
    } 
    .header__link {
        font-weight: 500;
        font-size: 13.05px;
        line-height: 18px;
        text-decoration: none;
        color: #828282;
        transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    } 
    .header__link.active {
        color: #000000;
        font-weight: 500;
    }
    .header__link:hover {
        opacity: 80%;
    }
    .header__link:active {
        opacity: 80%;
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
        transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    .sign-up-btn {
        border: none;
        background: linear-gradient(143.82deg, #A586FF -20.98%, #7774FF 57.1%);
        border-radius: 8px;
        padding: 10px 17px;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;
        color: #FFFFFF;
        cursor: pointer;
        transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    .sign-in-btn:hover {
        opacity: 80%;
    }
    .sign-up-btn:hover {
        opacity: 90%;
    }
    .header__profile-wrapper {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-profile-link {
        transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .user-profile-link-image {
        width: 100%;
        height: 100%;
    }
    .user-profile-link:hover {
        box-shadow: 0px 0px 4px #6070FE;
    }
    .theme,
    .notifications {
        width: 18px;
        height: 18px;
        margin-right: 50px;
        cursor: pointer;
        transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .notifications:hover {
        transform: rotate(10deg);
    }
    .notifications:hover path {
        stroke: #000000;
    }
    .theme:hover {
        transform: rotate(45deg);
    }
    .theme:hover path {
        stroke: #000000;
    }
</style>