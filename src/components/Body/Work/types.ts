export type WorkProps = {
    isDarkMode: boolean;
}

type WorkDateType = {
    from: string;
    to: string;
}

export type WorkPlaceDataType = {
    img: string;
    date: WorkDateType;
    name: string;
    position: string;
    description: string[],
}
