import {Sidebar} from "../../ui-kit/components/Sidebar";
import {SIDEBAR_ITEMS_DATA} from "./constants";

/** Меню страницы */
export const PageSidebar = () => {
    return (
        <Sidebar items={SIDEBAR_ITEMS_DATA} />
    );
};
