<template>
    <div class="event">
        <img src="../img/default-event-bg.png" alt="event" class="event__img">
        <span class="event__title">{{ name }}</span>
        <span class="event__descr">{{ descr }}</span>
        <div class="event__bottom-content-wrapper">
            <!--Signed component-->
            <div class="event__button-wrapper">
                <button class="event__button event-link"></button>
                <button class="event__button event-like"></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Event',
    props: {
        name: String,
        descr: String
    }
}
</script>

<style>
    .event {
        width: 278px;
        height: 292px;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 18px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: all 400ms cubic-bezier(.47,1.64,.41,.8);
    }
    .event:not(:nth-child(5n)) {
        margin-right: 30px;   
    }
    .event:hover {
        transform: scale(1.050);
    }
    .event__title {
        margin-top: 13px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
    .event__descr {
        margin-top: 6px;
        font-weight: 600;
        font-size: 11px;
        line-height: 12px;
        color: #828282;
    }
    .event__img {
        width: 100%;
        height: 153px;
        border-radius: 10px;
    }
    .event__bottom-content-wrapper {
        margin-top: 22px;
        padding-top: 16px;
        display: flex;
        align-items: center;
    }
    .event__button-wrapper {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    .event__button {
        background: #EEEEEE;
        border-radius: 5px;
        border: none;
        width: 25px;
        height: 25px;

        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: center center;
    }
    .event-link {
        background-image: url('@/img/event-link.png');
    }
    .event-like {
        background-image: url('@/img/event-like.png');
        margin-left: 10px;
    }
</style>