<template>
    <div class="home__hero">
        <div class="hero__container">
            <h1 class="hero__title">{{ $store.state.metrics.current.title }}</h1>
            <span class="hero__descr">{{ $store.state.metrics.current.descr }}</span>
            <input type="text" :placeholder="'Название'" class="hero__search-field">
            <div class="hero__tabs">
                <HeroTab @click="$store.dispatch('changeCurrent', metric);" v-for="(metric, index) in $store.state.metrics.data"
                    :key="index"
                    :name="metric.name"
                    :to="metric.route"
                ></HeroTab>
            </div>
        </div>
    </div>
</template>

<script>
import HeroTab from '@/layouts/HeroTab.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Hero',
    components: { HeroTab },
    methods: {
    }
}
</script>

<style>
    .home__hero {
        background-image: url('../img/hero-background.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .hero__title {
        font-weight: 800;
        font-size: 50px;
        line-height: 61px;
        color: #FFFFFF;
    }
    .hero__descr {
        margin-top: 14px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .hero__search-field {
        margin-top: 39px;
        border: none;
        background-color: #FFFFFF;
        padding: 16px 25px;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        width: 578px;
        border-radius: 50px;
    }
    .hero__search-field::placeholder {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #828282;
    }
    .hero__tabs {
        margin-top: 58px;
        display: flex;
    }
</style>