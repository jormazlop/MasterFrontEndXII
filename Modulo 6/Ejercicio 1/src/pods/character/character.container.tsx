import React from 'react';
import { Character, getCharacter } from './api';
import { CharacterComponent } from './character.component';
import { useParams } from 'react-router-dom';

export const CharacterContainer: React.FunctionComponent = (props) => {

  const [character, setCharacter ] = React.useState<Character>({} as Character);

  const { id } = useParams();

  React.useEffect(() => {
    getCharacter(id).then(response => setCharacter(response));
  }, []);

  return <CharacterComponent character={character}/>;
};
