import { createStore } from 'vuex'

export default createStore({
state: {
    user: {
        username: ''
    },
    metrics: {
        data: [
            {
                name: 'Образование',
                route: '/education',
                title: 'Откройте мир знаний!',
                descr: 'Ищите образовательные мероприятия для саморазвития'
            },
            {
                name: 'Социальные',
                route: '/social',
                title: 'Вносите изменения вместе с сообществом! ',
                descr: 'Найдите социальные события для поддержки и волонтёрства'
            },
            {
                name: 'Бизнес',
                route: '/business',
                title: 'Развивайте свой бизнес с нами!',
                descr: 'Поиск мероприятий для профессионального роста и обмена опытом'
            },
            {
                name: 'Культура',
                route: '/culture',
                title: 'Исследуйте культурное разнообразие! ',
                descr: 'Найдите мероприятия, где можно насладиться искусством и культурой'
            },
            {
                name: 'Наука',
                route: '/science',
                title: 'Расширьте границы познания!',
                descr: 'Найдите научные события, чтобы узнать о последних открытиях'
            },
        ],
        current: {
            name: 'education',
            route: '/education',
            title: 'Откройте мир знаний!',
            descr: 'Ищите образовательные мероприятия для саморазвития'
        }
    }
  },
mutations: {
    UPDATE_METRICS(state, payload) {
        state.metrics = payload
    }
},
actions: {
    uploadMetrics(context, payload) {
        const metrics = context.state.metrics
        metrics.data.push(payload)
        context.commit('UPDATE_METRICS', metrics)
    },
    changeCurrent(context, payload) {
        const metrics = context.state.metrics
        metrics.current = payload
        context.commit('UPDATE_METRICS', metrics)
    }
},
getters: {

}
})