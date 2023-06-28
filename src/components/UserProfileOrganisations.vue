<template>
    <div class="profile__organisations-container">
        <ProfileOrganisation
            v-for="(org, index) in orgs"
            :key="index"
            :name="org.name"
            :email="org.email"
            :location="org.location"
        ></ProfileOrganisation>
    </div>
</template>

<script>
import ProfileOrganisation from '@/layouts/ProfileOrganisation.vue';
import { EventlistAPI } from '@/api/EventlistAPI';

export default {
    name: 'UserProfileOrganisations',
    components: {
        ProfileOrganisation
    },
    data() {
        return {
            orgs: {},
        }
    },
    created() { this.getUserOrgs() },
    methods: {
        getUserOrgs() {
            EventlistAPI.get_by_user_id(this.$route.params.public_id)
                .then(responce => {
                    this.orgs = responce.data.data;
            })
        }
    }
}
</script>

<style>
.profile__organisations-container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
}
</style>