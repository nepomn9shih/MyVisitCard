import { ButtonContainer, Toggle, ToggleLabel } from './ToggleButtonStyles'

const ToggleButton = ({buttonText = '', handlerOnChange = () => {}}) => {
    
    return (
        <ButtonContainer>
        <Toggle type="checkbox" name="toggle" id="toggle-button" onChange={handlerOnChange}/>
        <ToggleLabel for="toggle-button">{buttonText}</ToggleLabel>
      </ButtonContainer>
    );
  };
  
  export default ToggleButton;
  