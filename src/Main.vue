<template>
    <Header></Header>
    <div class="app__container">
        <RouterView></RouterView>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Main",
    components: { Header }
}
</script>