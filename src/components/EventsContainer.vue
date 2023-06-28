<template>
    <div class="events-container">
            <Event
                v-for="(event, index) in events"
                :key="index"
                :name="event.name"
                :descr="event.descr"
                v-on:click="openEvent(event.public_id)"
            ></Event>
        </div>
</template>

<script>
import Event from '@/layouts/Event.vue';
import { EventlistAPI } from '@/api/EventlistAPI';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'EventsContainer',
    components: { Event },
    data() {
        return {
            events: [],
            users: {},
        }
    }, 
    props: {
        organisation: String
    },
    created() {
        this.getAllEvents();
    },
    methods: {
        getAllEvents() {
            EventlistAPI.get_events_by_organisation(this.organisation)
                .then(responce => {
                    this.events = responce.data.data;
                })
        },
        openEvent(public_id) {
            this.$router.push(`/event/${public_id}`)
        }
    }
}
</script>
