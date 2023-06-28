import { createStore } from 'vuex'

export default createStore({
state: {
    user: {
        token: localStorage.getItem('token') || null,
        role: localStorage.getItem('userRole') || null
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
            name: 'Популярные',
            route: '/popular',
            title: 'Найдите опыт!',
            descr: 'Поиск мероприятий по вашему региону'
        }
    },
    windows: {
        modal: false
    }
},
getters: {
    getUserRole: (state) => state.user.userRole,
    getToken: (state) => state.user.token,
    getModal: (state) => state.windows.modal
},
mutations: {
    UPDATE_METRICS(state, payload) {
        state.metrics = payload
    },
    SET_TOKEN(state, token) {
        state.user.token = token;
        localStorage.setItem('token', token)
    },

    SET_MODAL(state) {
        state.windows.modal = true
    },

    SET_USER_ROLE(state, role) {
        state.user.role = role;
        localStorage.setItem('userRole', role)
    },

    DELETE_TOKEN(state) {
        state.user.token = null;
        localStorage.removeItem('token');
    },

    DELETE_USER_ROLE(state) {
        state.user.role = null;
        localStorage.removeItem('userRole');
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
    },
    login(context, payload) {
        context.commit('SET_TOKEN', payload);
    },
    logout(context) {
        context.commit('DELETE_TOKEN', null);
        context.commit('DELETE_USER_ROLE', null)
    }
}
})