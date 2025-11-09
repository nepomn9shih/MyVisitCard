import styled from "styled-components";

export const StyledAboutBlock = styled.section`
    in-height: 400px;
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const StylesAboutContent = styled.div`
    background-color: var(--secondary-background-color);
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    min-height: 356px;

    p {
        font-size: 18px;
        line-height: 22px;
    }

    b {
        color: var(--main-color);
    }
`;

export const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    padding-bottom: 12px;
`;