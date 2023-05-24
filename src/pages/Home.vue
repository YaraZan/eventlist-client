<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home__container">
        <Hero></Hero>
        <router-view></router-view>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: { Hero },
    created() {
        this.$router.push(this.$store.state.metrics.current.route)
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