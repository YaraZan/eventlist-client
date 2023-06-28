<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home__container">
        <Header></Header>
        <Hero></Hero>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: { Hero, Header },
    computed: {
        currentRouteName() {
            console.log(this.$route.path)
            return this.$route.path;
        }
    }
}
</script>
