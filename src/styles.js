import styled, { css } from "styled-components";

export const StepButtonStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5em;
    border-radius: 10px;
    padding: 5px;
    width: 25px;
    height: 25px;
    background-color: #ccc;
    border: 1px solid transparent;
  }
  ${(props) =>
    props.active &&
    css`
      span {
        background-color: #29ad71;
        color: #fff;
      }
    `}

  ${(props) =>
    props.isChecked &&
    css`
      span {
        background-color: white;
        border: 1px solid #ccc;
        color: black;
      }
    `}
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #29ad71;
  color: #fff;
  border-radius: 8px;
  border: none;
  margin: 2px 5px;
  padding: 0.5em 1em;
`;

export const Steps = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
