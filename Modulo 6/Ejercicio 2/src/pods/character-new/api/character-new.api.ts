import Axios from 'axios';
import { Character } from './character-new.api-model';

const url = "http://localhost:3000/characters";

export const createCharacter = async (char: Character) => {
   Axios.post(url, char).then(response => response.data);
};


