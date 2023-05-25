<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home__container">
        <Hero></Hero>
        <EventsContainer v-if="currentRouteName == '/'"></EventsContainer>
        <router-view v-else></router-view>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import EventsContainer from '@/components/EventsContainer.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: { Hero, EventsContainer },
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