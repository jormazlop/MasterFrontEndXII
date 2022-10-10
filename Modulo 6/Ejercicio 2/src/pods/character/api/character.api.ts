import Axios from 'axios';
import { Character } from './character.api-model';

const url = "http://localhost:3000/characters";

export const getCharacter = async (id: string): Promise<Character> => {
  return await Axios.get(url + "/" + id).then(response => response.data);
};

export const updateCharacter = async (char: Character) => {
  Axios.put(url + "/" + char.id, char).then(response => response.data);
};


