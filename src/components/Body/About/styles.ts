import styled from "styled-components";

export const StyledAboutBlock = styled.section`
    in-height: 400px;
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    box-shadow: var(--box-shadow);
`;

export const StyledAboutContent = styled.div`
    background-color: var(--secondary-background-color);
    border-radius: 10px;
    padding: 16px 16px 0;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    b {
        color: var(--main-color);
    }

    @media (min-width: 700px) {
		flex-direction: row;
	}
`;

export const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`;