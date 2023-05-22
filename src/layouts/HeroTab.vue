<template>
    <router-link class="hero-tab">{{ name }}</router-link>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'HeroTab',
    props: {
        name: String,
        route: String
    },
    data() {

    },
    methods: {

    }
}
</script>

<style>
    .hero-tab {
        padding: 17px 24px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #828282;
        text-decoration: none;
        transition: all .5s cubic-bezier(0.42, 0, 0.58, 1);
    }
    .hero-tab:hover {
        background-color: #FFFFFF;
        color: #000000;
    }
    .active {
        background-color: #FFFFFF;
        color: #000000;
    }
    .hero-tab:not(:last-child) {
        margin-right: 9px;
    }
</style>