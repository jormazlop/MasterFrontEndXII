import { css } from 'emotion';

export const characterContainer = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  color: white;
`;

export const characterInput = css`
  margin-left: 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const returnButton = css`
  position: absolute;
  background-color: #f08d49;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 15px;
  font-family: cursive;
  transition-duration: 0.5s;

  &:hover {
    cursor: url('../assets/cursor-rick.png'), pointer;
    background-color: #f1690c;
  }
`;

export const error = css`
  color: red;
  font-size: 20px;
  font-family: cursive;
`;

export const addButton = css`
  background-color: #f08d49;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 15px;
  font-family: cursive;
  transition-duration: 0.5s;

  &:hover {
    cursor: url('../assets/cursor-rick.png'), pointer;
    background-color: #f1690c;
  }
`;

