import { AuthAPI } from "@/api/AuthAPI";

export const AuthModule = {
    namespaced: true,

    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
                userRole: localStorage.getItem('userRole') || null
            }
        }
    },

    getters: {
        getUserRole: (state) => state.credentials.userRole,
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token;
            localStorage.setItem('token', token)
        },

        setUserRole(state, userRole) {
            state.credentials.userRole = userRole;
            localStorage.setItem('userRole', userRole)
        },

        deleteToken(state, token) {
            state.credentials.token = token;
            localStorage.removeItem('token');
        },

        deleteUserRole(state, userRole) {
            state.credentials.userRole = userRole;
            localStorage.removeItem('userRole');
        }
    },

    actions: {
        onLogin({commit}, {email, password}) {
            AuthAPI.login({email, password}).then((res) => {
                commit('setToken', res.token);
                commit('setUserRole', res.token.data.role);
            })
        },

        onLogout({commit}) {
            commit('setToken', null);
            commit('setUserRole', null);
        }
    }
}