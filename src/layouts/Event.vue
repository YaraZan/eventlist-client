<template>
    <div class="event">
        <div class="img-block">
            <img src="../img/default-event-bg.png" alt="event" class="event__img">
            <div class="event__hiddenlayer">
                <span class="event__author">{{ creator }}</span>
                <div class="event__button-wrapper">
                    <button class="event__button duplicate-btn"></button>
                    <button class="event__button participate-btn"></button>
                </div>
            </div>
        </div>
        <div class="event__content">
            <span class="event__title">{{ name }}</span>
            <span class="event__descr">{{ descr }}</span>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Event',
    props: {
        name: String,
        descr: String,
        creator: String
    }
}
</script>

<style>
    .event {
        width: 380px;
        height: 297px;
        background-color: #FCFCFC;
        border-radius: 18px;
        box-shadow: 0px -0.904594px 29.8516px rgba(0, 0, 0, 0.08);
border-radius: 18px;
    }
    .event:not(:nth-child(4n)) {
        margin-right: 6px;
    }
    .img-block {
        width: 100%;
        height: 234px;
        border-radius: 18px;
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .img-block img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .img-block::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 18px;
        background-color: rgba(0, 0, 0, 0.5); /* Цвет затемнения (черный с прозрачностью 0.5) */
        opacity: 0; /* Начальная прозрачность */
        transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }

    .img-block:hover::after {
        opacity: 1; /* Полная прозрачность при наведении */
    }

    .event__content {
        padding: 9px 19px;
        display: flex;
        flex-direction: column;
        align-items: first baseline;
    }
    .event__title {
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        color: #000000;
    }
    .event__descr {
        font-weight: 500;
        font-size: 14px;
        line-height: 11px;
        color: #828282;
        margin-top: 6px;
    }
    .event__hiddenlayer {
        display: none;
        width: 100%;
        padding: 0 19px;
        z-index: 1;
        position: absolute;
        justify-content: center;
        align-items: center;
        top: auto;
        bottom: 15px;
        transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }
    .img-block:hover .event__hiddenlayer {
        display: flex;
    }
    .event__button-wrapper {
        display: flex;
        margin-left: auto;
    }
    .event__author {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
    .event__button {
        width: 37px;
        height: 37px;
        background-color: #c5c5c5;
        opacity: 60%;
        border-radius: 9px;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center center;
        border: none;
        padding: 7px;
        transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
        cursor: pointer;
    }
    .event__button:hover {
        opacity: 100%;
    }
    .duplicate-btn {
        background-image: url('@/img/event-duplicate-icon.png');
    }
    .participate-btn {
        background-image: url('@/img/event-sign-icon.png');
        margin-left: 6px;
    }
</style>