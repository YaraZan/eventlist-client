<template>
    <div class="events-container">
            <Event
                v-for="(event, index) in events"
                :key="index"
                :name="event.name"
                :descr="event.descr"
                :creator="getUserById(event.creator)"
            ></Event>
        </div>
</template>

<script>
import Event from '@/layouts/Event.vue';
import { getUserById } from '@/api/UsersService'
import axios from 'axios';

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
        organisation: Number
    },
    created() {
        this.getAllEvents();
    },
    methods: {
        getAllEvents() {
            const data = { organisation: this.organisation }
            axios.post('http://localhost/eventlist-api/api/event/read_by_organisation.php', data)
                .then(responce => {
                    this.events = responce.data.data;
                })
        },
        getUserById(id) {
            if (this.users[id]) {
                // Если имя пользователя уже получено, вернуть его
                return this.users[id];
            } else {
                // Иначе, получить имя пользователя и сохранить его в users
                return getUserById(id).then(response => {
                this.users[id] = response.name; // Используем $set для реактивного обновления users
                return response.name;
                });
            }
        }
    }
}
</script>
