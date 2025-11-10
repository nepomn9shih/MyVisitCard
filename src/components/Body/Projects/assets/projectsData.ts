import project1 from './Like.png';
import project2 from './CatNet.png';
import project3 from './VisitCard.png';
import project4 from './YoomoneyUnlogin.png';
import project5 from './YooVillage.png';
import project6 from './PassDefect.png';
import {ProjectData} from '../types';

export const projectsData: ProjectData[] = [
    {
        img: project1, 
        name: "Фото из VK", 
        description: "Тестовое задание: Есть серверный API социальной сети 'Вконтакте'. Сделать страницу вывода всех фото выбранного года. Фото выводятся в порядке убывания количества лайков на них.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "Redux-thunk", "Bootstrap", "Prop-types"],
        link: "https://github.com/nepomn9shih/LikedPhotoFromVK",
    }, 
    {
        img: project2, 
        name: "Социальная сеть", 
        description: "Учебный проект. Социальная сеть использует сторонний серверный API с базой пользователей. Возможности: логин/логаут пользователя, изменение имени, информации, аватара, добавление/удаление поста, отправка сообщения тестовым пользователям, просмотр всех пользователей, информации о выбранном пользователе, подписка/отписка от пользователя.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "Redux-form", "Axios", "Bootstrap"],
        link: "https://nepomn9shih.github.io/CatNet/",
    }, 
    {
        img: project3, 
        name: "Моя визитка", 
        description: "Мой проект. Сайт-визитка, содержащий информацию обо мне, моих навыках, опыте работы, моих проектах. Здесь также присутствуют ссылки: на мой репозиторий на GitHub, на мое резюме на HH.ru, на мою страницу в LinkedIn",
        technologies: ["React", "Nest.js", "JavaScript", "Styled-components", "TypeScript", "Grid",  "Swiper"],
        link: "https://github.com/nepomn9shih/MyVisitCard",
    },
    {
        img: project4, 
        name: "Страница yoomoney.ru", 
        description: "Стартовая страница сайта yoomoney.ru, которую видят незалогиненные пользователи. На ней представлено краткое описание основных сервисов ЮMoney",
        technologies: ["React", "Nest.js", "JavaScript", "Styled-components", "Grid", "TypeScript", "Material UI"],
        link: "https://yoomoney.ru",
    },
    {
        img: project5, 
        name: "Игра ЮVillage", 
        description: "Гемификация ЮMoney, маркетинговая игра основанная на принципе градостроительного симулятора. Необходимо выполнять различные платежные и не платежные задания - в награду получаем внутриигровую валюту для покупки различных зданий и украшений для игровой карты и опыт для развития уровня своего города. В здания, которые мы строим на карте, встроены различные мини-игры и активности.",
        technologies: ["React", "Nest.js", "JavaScript", "Emotion", "TypeScript", "Redux Toolkit", "Phaser.js", "Grid", "Three.js", "Material UI"],
        link: "https://yoomoney.ru/yoovillage",
    },
    {
        img: project6, 
        name: "Игра Pass Defect", 
        description: "2D-игра, по типу Vampire Survivors. В процессе разработки. Пока адаптировано только для десктопов. В свободное время занимаюсь проектом, чтобы глубже разобраться с возможностями движка Phaser.JS",
        technologies: ["React", "JavaScript", "Emotion", "TypeScript", "Redux Toolkit", "Phaser.js", "Piskel"],
        link: "https://nepomn9shih.github.io/PassDefect/",
    }
]
