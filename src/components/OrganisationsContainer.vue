<template>
    <Organisation
        v-for="(organisation, index) in organisations"
        :key="index"
        :name="organisation.name"
        :email="organisation.email"
        :public_id="organisation.public_id"
    ></Organisation>
</template>

<script>
import Organisation from '@/layouts/Organisation.vue';
import { EventlistAPI } from '@/api/EventlistAPI';

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
            EventlistAPI.get_all_organisations()
                .then(responce => {
                    this.organisations = responce.data.data
                })
        }
    }
}
</script>
