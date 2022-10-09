import { Character } from 'pods/character/api';
import * as React from 'react';
import { deleteCharacter, getCharacterCollection } from './api/character-collection.api';
import { CharacterCollectionComponent } from './character-collection.component';
import * as classes from './character-collection.styles';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const CharacterCollectionContainer = () => {

  const [characterCollection, setCharacterCollection ] = React.useState<Character[]>([]);

  const history = useHistory();

  React.useEffect(() => {
    getCharacterCollection().then(response => {
      setCharacterCollection(response)
    });
  }, []);

  const buttonDeleteCharacter = (id: number) => {
    deleteCharacter(id);
    getCharacterCollection().then(response => {
      setCharacterCollection(response)
    });
  }

  const addCharacter = () => {
    history.push(linkRoutes.addCharacter);
  }

  return (
    <div>
      <button className={classes.addButton} onClick={e => addCharacter()}>Añadir personaje</button>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDelete={buttonDeleteCharacter}
      />
    </div>
  );
};
