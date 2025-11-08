import styled from "styled-components";

export const GalleryBlock = styled.section`
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const GalleryItems = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const GalleryItem = styled.div<{isBig: boolean}>`
    position: relative;
    padding: 0px 0px 85% 0px;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
        opacity: var(--opacity-value);
        &:hover {
            border: 5px solid transparent;
            transition: 0.5s;
            box-shadow: 5px 5px 10px rgba(0,0,0,0.0);
        }
    }

    @media (min-width: 992px) {
        & {
            grid-column: ${({isBig}) => isBig ? "span 2" : ""};
            grid-row: ${({isBig}) => isBig ? "span 2" : ""};
        }

        :hover {
            cursor: pointer;
        }
    }
`;

export const GalleryDescription = styled.div`
    padding: 8px;
    color: white;
    width: auto;
    border-radius: 20px;
    background-color: black;
    opacity: 0.6;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;