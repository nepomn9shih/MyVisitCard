import {SidebarItem} from "../Sidebar/types";

export type PageProps = {
    path: string;
    component: () => JSX.Element;
};

export type PageBodyProps = {
    pages: PageProps[];
    sidebarItems?: SidebarItem[];
    sidebar?: JSX.Element;
};