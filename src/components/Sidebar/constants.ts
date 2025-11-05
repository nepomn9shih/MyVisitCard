import {Routes} from "../../enums/routes";

export const SIDEBAR_ITEMS_DATA: {
    to: string;
    title: string;
}[] = [
    {
        to: Routes.ABOUT_ME,
        title: "Обо мне"
    },
    {
        to: Routes.SKILLS,
        title: "Мои навыки"
    },
    {
        to: Routes.WORK,
        title: "Опыт работы"
    },
    {
        to: Routes.PROJECTS,
        title: "Мои проекты"
    },
    {
        to: Routes.GALLERY,
        title: "Галерея"
    },
    {
        to: Routes.VIDEO,
        title: "Видео"
    }
];