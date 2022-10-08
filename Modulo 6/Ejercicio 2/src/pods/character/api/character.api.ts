import Axios from 'axios';
import { Character } from './character.api-model';

const url = "https://rickandmortyapi.com/api/character";

export const getCharacter = async (id: string): Promise<Character> => {
  return await Axios.get(url + "/" + id).then(response => response.data);
};


