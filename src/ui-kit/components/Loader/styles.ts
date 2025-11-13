import styled from "styled-components";

export const StyledLoader = styled.div<{
    size: React.CSSProperties['height'];
    $mainColor: React.CSSProperties['color'];
    $secondaryColor: React.CSSProperties['color'];
}>`
  border: 8px solid ${({$mainColor}) => $mainColor};
  border-top: 8px solid ${({$secondaryColor}) => $secondaryColor};
  border-radius: 50%;
  width: ${({size}) => size};
  height: ${({size}) => size};
  animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;