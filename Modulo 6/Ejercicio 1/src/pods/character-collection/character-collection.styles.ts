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
export const searchContainer = css`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const searchInput = css`
  width: 200px;
  padding: 10px 40px 10px 20px;
  border-radius: 50px 0 0 50px;
  border: none;
  font-family: cursive;

  &:focus {
    outline: none;
  }
`;

export const searchButton = css`
  background-color: #f08d49;
  border: none;
  padding: 0 20px;
  color: white;
  border-radius : 0 50px 50px 0;
  position: relative;
  left: -20px;
  transition-duration: 0.5s;
  font-family: cursive;

  &:hover {
    cursor: pointer;
    background-color: #f1690c;
  }
`;

export const closeSearchButton = css`
  height: 20px;
  position: relative;
  left: -30px;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;
