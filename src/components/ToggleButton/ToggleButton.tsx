import {
  StyledButtonContainer,
  StyledToggle,
  StyledToggleLabel
} from './styles'
import {ToggleButtonProps} from './types';

export const ToggleButton = ({
    buttonText = '',
    handlerOnChange = () => {}
  }: ToggleButtonProps) => {
    return (
      <StyledButtonContainer className="qa-toggle-container">
        <StyledToggle
          className="qa-toggle-button"
          type="checkbox"
          name="toggle"
          id="toggle-button"
          onChange={handlerOnChange}
        />
        <StyledToggleLabel
          className="qa-toggle-label"
          htmlFor="toggle-button"
        >
          {buttonText}
        </StyledToggleLabel>
      </StyledButtonContainer>
    );
  };
  