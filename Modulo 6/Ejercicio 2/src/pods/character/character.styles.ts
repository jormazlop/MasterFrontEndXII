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

export const characterImage = css`
  border-radius: 50%;
  border: 1px solid white;

  &:hover {
    border: 1px solid #f08d49;
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

