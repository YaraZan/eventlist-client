<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home__container">
        <Header></Header>
        <Hero></Hero>
        <HomePopular v-if="currentRouteName == '/'"></HomePopular>
        <router-view v-else></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import HomePopular from '@/components/HomePopular.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: { Hero, HomePopular, Header },
    computed: {
        currentRouteName() {
            console.log(this.$route.path)
            return this.$route.path;
        }
    }
}
</script>

<style>
    .events-container {
        padding: 0px 160px;
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
    }
</style>