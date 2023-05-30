<template>
    <div class="event-container">
        <div class="event__content">
            <div class="event__creators-wrapper">

                <div class="organisation__header">
                    <img src="@/img/default-org-icon-16.png" alt="" class="organisation__image">
                    <span class="organisation__name">{{ orgName }}</span>
                    <span class="organisation__email">{{ orgEmail }}</span>
                </div>


                <div class="organisation__header">
                    <img src="@/img/default-pfp-icon-16.png" alt="" class="organisation__image">
                    <span class="organisation__name">{{ crName }}</span>
                    <span class="organisation__email">{{ crEmail }}</span>
                </div>

                <button class="sign-to-event">Заявка на вступление</button>

            </div>

            <div class="event__main-data-container">

                <h2 class="main-data__title">{{ evTitle }}</h2>
                <span class="main-data__descr">{{ evDescr }}</span>

            </div>

            <div class="event__about-data-container">

                <h4 class="about-data__title">О мероприятии</h4>
                <span class="about-data__descr">{{ evMainDescr }}</span>

            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .event-container {
        display: flex;
        margin: 0 auto;
    }
    .event__content {
        padding: 70px 240px;
        display: flex;
        flex-direction: column;
    }
    .event__creators-wrapper {
        display: flex;
        align-items: center;
    }
    .organisation__header:nth-child(2n) {
        margin-left: 30px;
    }
    .sign-to-event {
        background: #6070FE;
        border-radius: 8px;
        padding: 10px 14px;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        color: #FFFFFF;
        margin-left: auto;
    }
    .event__main-data-container {
        padding: 106px 114px 150px 114px;
        background-image: url('@/img/default-event-page-bg.png');
    }
</style>