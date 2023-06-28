<template>
    <div class="event-entry">
        <span class="event-entry__date">{{ day }}</span>
        <div class="event-entry__bottom-wrapper">
            <span class="event-entry__time">{{ time }}</span>
            <span class="event-entry__place">{{ place }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventEntry',
    data() {
        return {
            day: null,
            time: null
        }
    },  
    props: {
        datetime: String,
        place: String
    },
    created() {
        this.setData()
    },
    methods: {
        setData() {
            const dateTime = new Date(this.datetime);

            const day = dateTime.getDate();
            const monthIndex = dateTime.getMonth();

            const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

            this.day = `${day} ${monthNames[monthIndex]}`;

            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes();

            this.time = `${hours}:${minutes}`;
        }
    }
}
</script>

<style>
    .event-entry {
        width: 185px;
        height: 187px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 17px;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 13px;
    }
    .event-entry:not(:last-child) {
        margin-right: 15px;
    }
    .event-entry__date {
        font-weight: 700;
        font-size: 15.4482px;
        line-height: 19px;
        color: #000000;
        margin: auto;
    }
    .event-entry__bottom-wrapper {
        display: flex;
        flex-direction: column;
    }
    .event-entry__time {
        font-weight: 700;
        font-size: 11.3127px;
        line-height: 14px;
        color: #000000;
    }
    .event-entry__place {
        font-weight: 500;
        font-size: 11.3127px;
        line-height: 14px;
        color: #848484;
        margin-top: 10px;
    }
</style>