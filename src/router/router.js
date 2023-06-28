import { createRouter, createWebHistory } from 'vue-router';

import { Home, Work, About, Login, Auth, Profile, Event } from '@/pages'
import { HomeEducation, HomeSocial, HomeBusiness, HomeCulture, HomeScience, HomePopular, UserProfileOrganisations, UserProfileWorks, UserProfileSigns } from '@/components'

/**
 * @type {Boolean}
 */


const authGuard = function (to, from, next) {
    const isAuthorized = !!localStorage.getItem('token');
    if (!isAuthorized) next({name: 'Login'});
    else next();
}

const loginGuard = function (to, from, next) {
    const isAuthorized = !!localStorage.getItem('token')
    if (isAuthorized) next({name: 'Home'});
    else next()
}

export default createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            redirect: { name: 'Popular'}, 
            component: Home, 
            name: 'Home',
            children: [
                {
                    path: 'popular',
                    name: 'Popular',
                    component: HomePopular
                },
                {
                    path: 'education',
                    name: 'Education',
                    component: HomeEducation
                },
                {
                    path: 'social',
                    name: 'Social',
                    component: HomeSocial
                },
                {
                    path: 'business',
                    name: 'Business',
                    component: HomeBusiness
                },
                {
                    path: 'culture',
                    name: 'Culture',
                    component: HomeCulture
                },
                {
                    path: 'science',
                    name: 'Science',
                    component: HomeScience
                },
            ]
        },
        { path: '/work', name: 'Work', component: Work },
        { path: '/about', name: 'About', component: About },
        { path: '/login', name: 'Login', component: Login, beforeEnter: loginGuard },
        { path: '/auth', name: 'Auth', component: Auth, beforeEnter: loginGuard },
        { 
            path: '/profile/:public_id',
            redirect: { name: 'organisations' },
            name: 'Profile',
            sensitive: true,
            component: Profile,
            beforeEnter: authGuard,
            children: [
                { path: 'organisations', name: 'organisations', component: UserProfileOrganisations },
                { path: 'works', name: 'works', component: UserProfileWorks },
                { path: 'signs', name: 'signs', component: UserProfileSigns }
            ]
        },
        { path: '/event/:public_id', name: 'Event', sensitive: true, component: Event}
    ],
    linkActiveClass: 'active'
})
