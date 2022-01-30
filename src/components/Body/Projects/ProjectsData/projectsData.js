import project0 from './DriversOfF1.png'
import project1 from './Like.png'
import project2 from './MobileStore.png'
import project3 from './MaterialUIBlog.png'
import project4 from './CatNet.png'
import project5 from './VisitCard.png'
import project6 from './YoomoneyUnlogin.png'
import project7 from './YooVillage.png'

export const projectsData = [
    {
        img: project0, 
        name: "Картотека гонщиков F1", 
        description: "Тестовое задание: Есть серверный API с базой данных гонщиков F1. Сделать страницу вывода всех гонщиков со всей информацией о них, реализовать пагинацию и переход на страницу выбранного гонщика. Сделать поиск по имени в пределах страницы.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "React-js-pagination", "React-router-dom", "Bootstrap"],
        link: "https://github.com/nepomn9shih/DriversList",
    }, 
    {
        img: project1, 
        name: "Фото из VK", 
        description: "Тестовое задание: Есть серверный API социальной сети 'Вконтакте'. Сделать страницу вывода всех фото выбранного года. Фото выводятся в порядке убывания количества лайков на них.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "Redux-thunk", "Bootstrap", "Prop-types"],
        link: "https://github.com/nepomn9shih/LikedPhotoFromVK",
    }, 
    {
        img: project2, 
        name: "Интернет-магазин", 
        description: "Тестовое задание. Сделать страницу интернет-магазина с мобильными телефонами. Реализовать фильтрацию по бренду и форму лог ина пользователя.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        link: "https://github.com/nepomn9shih/MobileStore",
    }, 
    {
        img: project3, 
        name: "Страница блога", 
        description: "Тестовое задание. Сделать страницу блога с использованием Material UI.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
        link: "https://github.com/nepomn9shih/MyBlog",
    }, 
    {
        img: project4, 
        name: "Социальная сеть", 
        description: "Учебный проект. Социальная сеть использует сторонний серверный API с базой пользователей. Возможности: логин/логаут пользователя, изменение имени, информации, аватара, добавление/удаление поста, отправка сообщения тестовым пользователям, просмотр всех пользователей, информации о выбранном пользователе, подписка/отписка от пользователя.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "React-router-dom", "Redux", "Redux-thunk", "Redux-form", "Axios", "Bootstrap"],
        link: "https://nepomn9shih.github.io/CatNet/",
    }, 
    {
        img: project5, 
        name: "Моя визитка", 
        description: "Мой проект. Сайт-визитка, содержащий информацию обо мне, моих навыках, опыте работы, моих проектах. Здесь также присутствуют ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою страницу в LinkedIn",
        technologies: ["React", "Nest.js", "JavaScript", "Styled-components", "TypeScript", "Grid",  "Swiper"],
        link: "https://github.com/nepomn9shih/MyVisitCard",
    },
    {
        img: project6, 
        name: "Страница yoomoney.ru", 
        description: "Стартовая страница сайта yoomoney.ru, которую видят незалогиненные пользователи. На ней представлено краткое описание основных сервисов ЮMoney",
        technologies: ["React", "Nest.js", "JavaScript", "Styled-components", "TypeScript", "Grid", "Material UI"],
        link: "https://yoomoney.ru",
    },
    {
        img: project7, 
        name: "Игра ЮVillage", 
        description: "Гемификация ЮMoney, маркетинговая игра основанная на принципе градостроительного симулятора. Необходимо выполнять различные платежные и не платежные задания - в награду получаем внутриигровую валюту для покупки различных зданий и украшений для игровой карты и опыт для развития уровня своего города. В здания, которые мы строим на карте, встроены различные мини-игры и активности.",
        technologies: ["React", "Nest.js", "JavaScript", "Styled-components", "TypeScript", "Redux Toolkit", "Grid", "Canvas", "Three.js", "Material UI"],
        link: "https://yoomoney.ru/yoovillage",
    }
]
