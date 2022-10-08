import { Character } from 'pods/character/api';
import * as React from 'react';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {

  const [characterCollection, setCharacterCollection ] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharacterCollection().then(response => setCharacterCollection(response.results));
  }, []);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
    />
  );
};
