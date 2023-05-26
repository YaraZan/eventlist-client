<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header></Header>
    <div class="work__container"><h1>This is Work!</h1></div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Work',
    components: { Header }
}
</script>