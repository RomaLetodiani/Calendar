import styled, { css } from 'styled-components';

type DayProps = {
  isToday: boolean;
  isSelected: boolean;
  onClick: () => void;
};

export const Day = styled.div<DayProps>`
  width: 13%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 700;
  transition: background-color 0.3s ease-in-out, color 0.1s ease-in-out;
  margin: 2px;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #fff;
      color: white;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #fff;
      background-color: #8ec5fc;
      color: white;
    `}
`;
