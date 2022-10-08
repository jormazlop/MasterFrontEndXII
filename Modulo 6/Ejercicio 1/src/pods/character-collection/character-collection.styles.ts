import { css } from 'emotion';

export const charactersPage = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


export const characterContainer = css`
  display: flex;
  margin: 10px;
  border-radius: 10px;
  width: 500px;
  height: 200px;
  transition-duration: 0.2s;

  &:hover {
    width: 520px;
    cursor: url('../assets/cursor-morty.png'), pointer;
  }
`;

export const characterImage = css`
  border-radius: 10px 0 0 10px;
  width: 200px;
`

export const characterDescription = css`
  background-color: grey;
  width: 100%;
  border-radius: 0 10px 10px 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const characterName = css`
  font-size: 20px;
  text-align: center;
  padding: 0 10px;
  transition-duration: 0.5s;
  &:hover {
    color: #f08d49;
  }
`

export const characterSpecie = css`
  font-size: 15px;
  text-align: center;
  transition-duration: 0.5s;
  &:hover {
    color: #f08d49;
  }
`
export const characterStatus = css`
  font-size: 15px;
  text-align: center;
  transition-duration: 0.5s;
  &:hover {
    color: #f08d49;
  }
`

