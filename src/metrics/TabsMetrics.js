export default function getLeadingtabs() {
    const data = [
        {
            name: 'education',
            route: '/education',
            title: 'Откройте мир знаний!',
            descr: 'Ищите образовательные мероприятия для саморазвития'
        },
        {
            name: 'social',
            route: '/social',
            title: 'Вносите изменения вместе с сообществом! ',
            descr: 'Найдите социальные события для поддержки и волонтёрства'
        },
        {
            name: 'business',
            route: '/business',
            title: 'Развивайте свой бизнес с нами!',
            descr: 'Поиск мероприятий для профессионального роста и обмена опытом'
        },
        {
            name: 'culture',
            route: '/culture',
            title: 'Исследуйте культурное разнообразие! ',
            descr: 'Найдите мероприятия, где можно насладиться искусством и культурой'
        },
        {
            name: 'science',
            route: '/science',
            title: 'Расширьте границы познания!',
            descr: 'Найдите научные события, чтобы узнать о последних открытиях'
        },
    ]
    return data
}