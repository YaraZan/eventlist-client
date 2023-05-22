import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Work from '@/pages/Work.vue';
import About from '@/pages/About.vue';

import HomeEducation from '@/components/HomeEducation.vue'
import HomeSocial from '@/components/HomeSocial.vue'
import HomeBusiness from '@/components/HomeBusiness.vue'
import HomeCulture from '@/components/HomeCulture.vue'
import HomeScience from '@/components/HomeScience.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: Home, 
            children: [
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
        { path: '/Work', component: Work },
        { path: '/About', component: About }
    ]
})
