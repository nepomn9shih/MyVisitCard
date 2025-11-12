import {ThemeNames} from "../../enums/ThemeNames";
import {THEME_KEY} from "../constants";

/** Возвращает значение, сохраненное в localStorage по ключу */
export const getValueFromLocalStorage = (key: string) => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.localStorage.getItem(key);
};

/** Возвращает значение темы, сохраненное в localStorage */
export const getTheme = (): ThemeNames => {
    const theme = getValueFromLocalStorage(THEME_KEY);

    return (
        theme === ThemeNames.DARK
            ? ThemeNames.DARK
            : ThemeNames.LIGHT
    );
}