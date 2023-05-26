<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header></Header>
    <div class="about__container"><h1>This is About!</h1></div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
    components: { Header }
}
</script>