import { ThemeNames } from '../../../enums/ThemeNames';
import {getTheme} from '../../utils/getValueFromLocalStorage';
import {Text} from '../Text';
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
    const theme = getTheme();

    return (
      <StyledButtonContainer className="qa-toggle-container">
        <StyledToggle
          className="qa-toggle-button"
          type="checkbox"
          name="toggle"
          id="toggle-button"
          checked={theme === ThemeNames.DARK}
          onChange={handlerOnChange}
        />
        <StyledToggleLabel
          className="qa-toggle-label"
          htmlFor="toggle-button"
        >
          <Text variation='descriptionL' text={buttonText} />
        </StyledToggleLabel>
      </StyledButtonContainer>
    );
  };
  