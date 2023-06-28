<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header></Header>
    <div v-if="event" class="event-container">
        <div class="event__header">
            <div class="event-header__data">
                <h2 class="event-header__title">{{ event.name }}</h2>
                <span class="event-header__descr">{{ event.descr }}</span>
                <div class="event-header__creators-wrapper">
                    <EventCreator :usr="event.creator"></EventCreator>
                    <EventOrganisation :style="'margin-left: 50px;'" :org="event.organisation"></EventOrganisation>
                </div>
            </div>
            <div class="event-header__img">
                <img src="@/img/default-event-image-blue.png" alt="">
            </div>
        </div>
        <div v-if="modal" id="page-mask"></div>
        <EntryModalWindow :entry="entry" v-if="entry"></EntryModalWindow>
        <EventEntries @openModal="openModalWindow($event)" :evnt="event.public_id"></EventEntries>
    </div>
    <div v-if="loading" class="loading-data"><h1>Loading..</h1></div>
</template>

<script>
import Header from '@/components/Header.vue';
import EventCreator from '@/components/Event/EventCreator.vue';
import EventOrganisation from '@/components/Event/EventOrganisation.vue';
import EventEntries from '@/components/Event/EventEntries.vue'
import EntryModalWindow from '@/components/EntryModalWindow.vue'
import { EventlistAPI } from '@/api/EventlistAPI';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Event',
    components: { EventCreator, EventOrganisation, EventEntries, Header, EntryModalWindow },
    data() {
        return {
            loading: false,
            event: null,
            entry: null,
            modal: false
        }
    },
    created() {
        this.fetch_event_data(); 
    },
    methods: {
        fetch_event_data() {
            this.loading = true
            EventlistAPI.get_single_event(this.$route.params.public_id).then(responce => {
                this.loading = false
                this.event = responce.data
            });
        },
        openModalWindow(entry) {
            this.modal = !this.modal;
            this.entry = entry;
        }
    }
}
</script>

<style>
    #page-mask {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .event-container {
        padding: 44px 189px 0 189px;
        display: flex;
        flex-direction: column;
    }
    .event__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .event-header__data {
        display: flex;
        flex-direction: column;
        width: calc((100% / 2) - 5px);
        height: 320px;
        padding: 80px 0 50px 70px;
        background-color: #F6F6F6;
        border-radius: 22px;
        background-image: url('@/img/event-header-background.png');
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .event-header__img {
        width: calc((100% / 2) - 5px);
        height: 320px;
        border-radius: 22px;
    }
    .event-header__img img {
        width: 100%;
        height: 100%;
    }
    .event-header__title {
        font-weight: 700;
        font-size: 39.2047px;
        line-height: 48px;
        color: #000000;
        max-width: 580px;
    }
    .event-header__descr {
        margin-top: 20px;
        font-weight: 500;
        font-size: 12.2515px;
        line-height: 15px;
        color: #848484;
        max-width: 475px;
    }
    .event-header__creators-wrapper {
        display: flex;
        align-items: center;
        margin-top: 50px;
    }
</style>