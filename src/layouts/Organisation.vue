<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="organisation-container">
        <div class="organisation__header">
            <img src="@/img/default-org-icon-16.png" alt="" class="organisation__image">
            <span class="organisation__name">{{ name }}</span>
            <span class="organisation__email">{{ email }}</span>
        </div>
        <EventsContainer :organisation="id"></EventsContainer>
    </div>
</template>

<script>
import EventsContainer from '@/components/EventsContainer.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Organisation',
    components: { EventsContainer },
    props: {
        name: String,
        email: String,
        id: Number
    }
}
</script>

<style>
    .organisation-container {
        display: flex;
        padding: 0px 160px;
        margin-top: 60px;
        flex-direction: column;
    }
    .organisation__header {
        display: flex;
        align-items: center;
    }
    .organisation__name {
        margin-left: 11px;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        color: #6070FE;
    }
    .organisation__email {
        margin-left: 11px;
        font-weight: 500;
        font-size: 13px;
        line-height: 12px;
        color: #828282;
    }
    .events-container {
        margin-top: 14px;
        display: flex;
        flex-wrap: wrap;
    }
</style>