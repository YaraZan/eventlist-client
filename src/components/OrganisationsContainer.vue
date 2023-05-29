<template>
    <Organisation
        v-for="(organisation, index) in organisations"
        :key="index"
        :name="organisation.name"
        :email="organisation.email"
        :id="organisation.id"
    ></Organisation>
</template>

<script>
import Organisation from '@/layouts/Organisation.vue';
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'OrganisationsContainer',
    components: { Organisation },
    data() {
        return {
            organisations: []
        }
    }, 
    created() {
        this.getAllOrganisations();
    },
    methods: {
        getAllOrganisations() {
            axios.get('http://localhost/eventlist-api/api/organisation/read.php')
                .then(responce => {
                    this.organisations = responce.data.data
                })
        }
    }
}
</script>
