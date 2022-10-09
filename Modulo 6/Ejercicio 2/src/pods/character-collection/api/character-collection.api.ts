import Axios from 'axios';
import { Character } from '../../character/api/character.api-model';

const url = "http://localhost:3000/characters";

export const getCharacterCollection = async (): Promise<Character[]> => {
  return await Axios.get(url).then(response => response.data);
};
