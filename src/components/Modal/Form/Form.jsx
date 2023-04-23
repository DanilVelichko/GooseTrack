import {
  StyledInput,
  StyledInputText,
  InputWraper,
  StyledInputContainer,
  StyledLabel,
} from './Form.styled';

export const Form = ({
  inputHendler,
  enterTextTitle,
  startTitle,
  endTitle,
}) => {
  return (
    <form action="">
      <InputWraper>
        <StyledLabel htmlFor="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          onChange={inputHendler}
          value={enterTextTitle}
        />
      </InputWraper>
      <StyledInputContainer>
        <InputWraper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledInput
            type="text"
            name="start"
            onChange={inputHendler}
            value={startTitle}
          />
        </InputWraper>
        <InputWraper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="text"
            name="end"
            onChange={inputHendler}
            value={endTitle}
          />
        </InputWraper>
      </StyledInputContainer>
    </form>
  );
};
