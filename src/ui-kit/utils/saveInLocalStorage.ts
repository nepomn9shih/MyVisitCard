import {ThemeNames} from "../../enums/ThemeNames";
import {THEME_KEY} from "../constants";

/** Сохраняет значение в localStorage */
export const saveInLocalStorage = (storageKey: string, storageValue: string) => {
    if (typeof window === 'undefined') {
        return;
    }

	window.localStorage.setItem(storageKey, storageValue);
};

/** Сохраняет значение темы в localStorage */
export const saveTheme = (theme: ThemeNames) => {
    saveInLocalStorage(THEME_KEY, theme);
};
