export type SidebarItem = {
    to: string;
    title: string;
};

export type SidebarItemProps = {
    to: string;
    title: string;
    color: React.CSSProperties['color'];
    hoverColor: React.CSSProperties['color'];
    activeColor: React.CSSProperties['color'];
    activeBgColor: React.CSSProperties['backgroundColor'];
};

export type SidebarProps = {
    items: SidebarItem[];
    color?: React.CSSProperties['color'];
    bgColor?: React.CSSProperties['backgroundColor'];
    hoverColor?: React.CSSProperties['color'];
    activeColor?: React.CSSProperties['color'];
    activeBgColor?: React.CSSProperties['backgroundColor'];
};
