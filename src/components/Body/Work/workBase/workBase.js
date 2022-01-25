import work0 from "./combo.png";
import work1 from "./NBCom.png";
import work2 from "./ya.png";
import work3 from "./Yoomoney.png";

const workBase = [
  {
    img: work0,
    date: { from: "03.2010", to: "05.2018" },
    name: "M.video / Citilink / Samsung",
    position: "Продавец / Администратор",
    description: ["Розничные продажи", "Управление персоналом"],
  },
  {
    img: work1,
    date: { from: "06.2018", to: "07.2020" },
    name: "NBCom Group",
    position: "Менеджер по обучению",
    description: [
      "Создание и проведение тренингов для розничных и офисных сотрудников в онлайн и офлайн форматах",
      "Администрирование учебного портала на базе Moco (Moodle)",
      "Проектирование и верстка курсов дистанционного обучения на платформе iSpring и Articulate.",
    ],
  },
  {
    img: work2,
    date: { from: "07.2020", to: "01.2021" },
    name: "Фриланс",
    position: "Дизайнер СДО",
    description: [
      "Создание дизайна и верстка курсов Системы Дистанционного Обучения на базе iSpring.",
      'Работал с компанией "ЮMoney" (ex. "Яндекс.Деньги")',
    ],
  },
  {
    img: work3,
    date: { from: "02.2021", to: "Работаю" },
    name: "ЮMoney",
    position: "Frontend-разработчик",
    description: [
      "Разработка и поддержка гемификации - игры 'ЮVillage'",
      'Разработка и поддержка страницы для неавторизированных пользователей yoomoney.ru',
    ],
  },
];

export default workBase;
