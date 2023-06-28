<template>
    <div class="event-organisation-container">
        <div class="event-organisation__img"><img src="@/img/default-event-organisation-green.png" alt=""></div>
        <span class="event-organisation__name">{{ organisation.name }}</span>
        <span class="event-organisation__email">{{ organisation.email }}</span>
    </div>
</template>

<script>
import { EventlistAPI } from '@/api/EventlistAPI';

export default {
    name: 'EventOrganisation',
    props: { org: String },
    data() {
        return {
            organisation: []
        }
    },
    created() { this.fetch_org_data() },
    methods: {
        fetch_org_data() {
            EventlistAPI.get_single_organisation(this.org).then(responce => {
                this.organisation = responce.data;
            })
        }
    }
}
</script>

<style>
.event-organisation-container {
    display: flex;
    align-items: center;
}
.event-organisation__img {
    width: 30px;
    height: 30px;
}
.event-organisation__img img {
    width: 100%;
    height: 100%;
}
.event-organisation__name {
    margin-left: 10px;
    font-weight: 700;
    font-size: 13px;
    line-height: 13px;
    color: #6070FE;
}
.event-organisation__email {
    margin-left: 10px;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
    color: #828282;
    padding-left: 11px;
    background-image: url('@/img/link-point.png');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 3px 3px;

}
</style>