<template>
    <div class="profile__organisation">
        <img src="@/img/default-organisation-icon-violet.png" alt="" class="profile__organisation-img">
        <span class="profile__organisation-name">{{ name }}</span>
        <span class="profile__organisation-email">{{ email }}</span>
        <span class="profile__organisation-location">{{ location }}</span>
        <!--Profile organisation people component-->
    </div>
</template>

<script>
export default {
    name: 'ProfileOrganisation',
    props: {
        name: String,
        email: String,
        location: String
    }
}
</script>

<style>
.profile__organisation {
    padding: 24px;
    width: 292px;
    display: flex;
    flex-direction: column;
    background: #F8F8F8;
    border-radius: 10px;
    transition: all 400ms cubic-bezier(.47,1.64,.41,.8);
    cursor: pointer;
}
.profile__organisation:hover {
    transform: scale(1.050);
}
.profile__organisation:not(:nth-child(5n)) {
    margin-right: 15px;
}
.profile__organisation-img {
    width: 56px;
    height: 56px;
    border-radius: 100px;
}
.profile__organisation-name {
    margin-top: 17px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}
.profile__organisation-email {
    margin-top: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 9px;
    color: #828282;
}
.profile__organisation-location {
    margin-top: 28px;
    font-weight: 400;
    font-size: 11.4404px;
    line-height: 14px;
    color: #ABABAB;
}
</style>