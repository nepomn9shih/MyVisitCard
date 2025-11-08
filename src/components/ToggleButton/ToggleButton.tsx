import {ButtonContainer, Toggle, ToggleLabel} from './styles'
import {ToggleButtonProps} from './types';

export const ToggleButton = ({
    buttonText = '',
    handlerOnChange = () => {}
  }: ToggleButtonProps) => {
    
    return (
        <ButtonContainer>
        <Toggle type="checkbox" name="toggle" id="toggle-button" onChange={handlerOnChange}/>
        <ToggleLabel htmlFor="toggle-button">{buttonText}</ToggleLabel>
      </ButtonContainer>
    );
  };
  