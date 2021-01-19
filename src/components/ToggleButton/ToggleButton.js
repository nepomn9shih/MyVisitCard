import { ButtonContainer, Toggle, ToggleLabel } from './ToggleButtonStyles'

const ToggleButton = ({buttonText = '', handlerOnChange = () => {}, isDarkMode = false}) => {
    
    return (
        <ButtonContainer>
        <Toggle type="checkbox" name="toggle" id="toggle-button" onChange={handlerOnChange}/>
        <ToggleLabel dark={isDarkMode} for="toggle-button">{buttonText}</ToggleLabel>
      </ButtonContainer>
    );
  };
  
  export default ToggleButton;
  