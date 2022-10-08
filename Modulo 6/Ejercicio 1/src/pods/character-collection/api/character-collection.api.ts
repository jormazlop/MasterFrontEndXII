import Axios from 'axios';
import { CharacterCollection } from './character-collection.api-model';

const url = "https://rickandmortyapi.com/api/character";

export const getCharacterCollection = async (): Promise<CharacterCollection> => {
  return await Axios.get(url).then(response => response.data);
};
