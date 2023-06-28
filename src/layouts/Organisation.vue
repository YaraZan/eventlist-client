<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="organisation-container">
        <div class="organisation__header">
            <img src="@/img/default-org-icon-16.png" alt="" class="organisation__image">
            <span class="organisation__name">{{ name }}</span>
            <span class="organisation__email">{{ email }}</span>
        </div>
        <EventsContainer :organisation="public_id"></EventsContainer>
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
        public_id: String
    }
}
</script>

<style>
    .organisation-container {
        display: flex;
        padding: 0px 189px;
        justify-content: space-between;
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
        background-image: url('@/img/link-point.png');
        background-repeat: no-repeat;
        background-position: left center;
        padding-left: 13px;
    }
    .events-container {
        margin-top: 14px;
        display: flex;
        flex-wrap: wrap;
    }
</style>