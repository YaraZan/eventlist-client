<template>

import YandexMap from './YandexMap.vue';
    <div class="entry-modal-window">
        <div class="modal-left">
            <YandexMap :address="place"></YandexMap>
            <div class="modal-left__place-cont">
                <span class="entry-modal-window__attr-title">Место</span>
                <span class="entry-modal-window__attr-content">{{ place }}</span>
            </div>
        </div>
        <div class="modal-right">
            <div class="modal-right__data-cont">
                <div class="modal-right__data-wrapper">
                    <span class="entry-modal-window__attr-title">Дата</span>
                    <span class="entry-modal-window__attr-content">{{ day }}</span>
                </div>
                <div class="modal-right__data-wrapper">
                    <span class="entry-modal-window__attr-title">Время</span>
                    <span class="entry-modal-window__attr-content">{{ time }}</span>
                </div>
            </div>
            <div class="modal-right__cost-cont">
                <div class="modal-right__data-wrapper">
                    <span class="entry-modal-window__attr-title">Стоимость</span>
                    <span class="entry-modal-window__attr-content">Бесплатно</span>
                </div>
            </div>
            <div class="modal-right__data-wrapper">
                <button class="entry-modal-window-signup">Записаться</button>
                <button class="entry-modal-window-cancel">Назад</button>
            </div>
        </div>
    </div>
</template>

<script>
import YandexMap from '@/components/YandexMap.vue'
export default {
    name: "EntryModalWindow",
    props: {
        entry: Object
    },
    data() {
        return {
            day: null,
            time: null,
            place: null
        };
    },
    created() {
        this.setData();
    },
    methods: {
        setData() {
            const dateTime = new Date(this.entry.datetime);
            this.place = this.entry.place;
            const day = dateTime.getDate();
            const monthIndex = dateTime.getMonth();
            const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
            this.day = `${day} ${monthNames[monthIndex]}`;
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes();
            this.time = `${hours}:${minutes}`;
        }
    },
    components: { YandexMap }
}
</script>

<style>
    .entry-modal-window {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 30%;
        left: 50%;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        width: 680px;
        padding: 35px;
        align-items: flex-start;
        gap: 10px;
    }
    .modal-left {
        width: 60%;
        display: flex;
        flex-direction: column;
    }
    .modal-right {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .modal-left__place-cont {
        border-radius: 10px;
        background: #F6F6F6;
        display: flex;
        flex-direction: column;
        padding: 25px 27px;
    }
    .entry-modal-window__attr-title {
        color: #848484;
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    .entry-modal-window__attr-content {
        color: #000;
        font-size: 12px;
        font-weight: 700;
    }
    .modal-right__data-cont {
        display: flex;
        padding: 25px 27px;
        border-radius: 10px;
        background: #F6F6F6;
        flex-direction: column;
        gap: 10px;
    }
    .modal-right__data-wrapper {
        display: flex;
        flex-direction: column;
    }
    .modal-right__cost-cont {
        display: flex;
        padding: 25px 27px;
        border-radius: 10px;
        background: #F6F6F6;
        flex-direction: column;
        gap: 10px;
    }
    .entry-modal-window-signup {
        border-radius: 10px;
        background: #6070FE;
        color: #FFF;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        padding: 11px 50px;
        border: none;
        margin-bottom: 10px;
    }
    .entry-modal-window-cancel {
        background: #F6F6F6;
        border-radius: 10px;
        color: #848484;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        padding: 11px 50px;
        border: none;
    }
</style>