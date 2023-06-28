<template>
    <div class="event-entries__container">
        <EventEntry v-for="(entry, index) in entries"
            :key="index"
            :datetime="entry.datetime"
            :place="entry.place"
            v-on:click="openEntry(entry)"
        ></EventEntry>
    </div>
</template>

<script>
import { EventlistAPI } from '@/api/EventlistAPI';
import EventEntry from '@/layouts/EventEntry.vue'

export default {
    name: 'EventEntries',
    props: {
        evnt: String
    },
    components: { EventEntry },
    data() {
        return {
            entries: {}
        }
    },
    created() {
        this.fetchEventEntries()
    },
    methods: {
        fetchEventEntries() {
            EventlistAPI.get_entries_by_event(this.evnt)
                .then(responce => {
                    this.entries = responce.data.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        openEntry(entry) {
            this.$emit('openModal', entry);
        }
    }
}
</script>

<style>
.event-entries__container {
    background: #F8F8F8;
    border-radius: 18px;
    padding: 23px;
    display: flex;
    margin-top: 15px;
}
</style>