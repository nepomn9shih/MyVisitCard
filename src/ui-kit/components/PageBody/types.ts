import type {ReactNode} from "react";

import type {SidebarItem} from "../Sidebar/types";

export type PageProps = {
    path: string;
    component: () => ReactNode;
};

export type PageBodyProps = {
    pages: PageProps[];
    sidebarItems?: SidebarItem[];
    sidebar?: ReactNode;
};