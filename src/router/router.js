import { createRouter, createWebHistory } from 'vue-router';

import { Home, Work, About, Login, Auth, Profile } from '@/pages'
import { HomeEducation, HomeSocial, HomeBusiness, HomeCulture, HomeScience, HomePopular } from '@/components'

/**
 * @type {Boolean}
 */
// eslint-disable-next-line no-prototype-builtins
const isAuthorized = localStorage.hasOwnProperty('token');

const authGuard = function (to, from, next) {
    console.log(isAuthorized)
    if (!isAuthorized) next({name: 'Login'});
    else next()
}

export default createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: Home, 
            name: 'Home',
            children: [
                {
                    path: 'popular',
                    component: HomePopular
                },
                {
                    path: 'education',
                    component: HomeEducation
                },
                {
                    path: 'social',
                    component: HomeSocial
                },
                {
                    path: 'business',
                    component: HomeBusiness
                },
                {
                    path: 'culture',
                    component: HomeCulture
                },
                {
                    path: 'science',
                    component: HomeScience
                },
            ]
        },
        { path: '/work', name: 'Work', component: Work },
        { path: '/about', name: 'About', component: About },
        { path: '/login', name: 'Login', component: Login },
        { path: '/auth', name: 'Auth', component: Auth },
        { path: '/profile', name: 'Profile', component: Profile, beforeEnter: authGuard}
    ]
})
