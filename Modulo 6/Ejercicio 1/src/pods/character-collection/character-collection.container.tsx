import { Character } from 'pods/character/api';
import * as React from 'react';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterCollectionComponent } from './character-collection.component';
import * as classes from './character-collection.styles';

export const CharacterCollectionContainer = () => {

  const [characterInitialCollection, setCharacterInitialCollection ] = React.useState<Character[]>([]);

  const [characterCollection, setCharacterCollection ] = React.useState<Character[]>([]);

  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    getCharacterCollection().then(response =>
      {
        setCharacterInitialCollection(response.results);
        setCharacterCollection(response.results);
      }
  )}, []);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const buttonSearch = () => {
    if(search) {
      setCharacterCollection(characterInitialCollection.filter(x => x.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      setCharacterCollection(characterInitialCollection);
    }
  }

  return (
    <div>
      <div className={classes.rechercheContainer}>
      <input type="text" value={search} onChange={handleChange}/><button onClick={e => buttonSearch()}>Buscar</button>
      </div>
      <CharacterCollectionComponent characterCollection={characterCollection}/>
    </div>
  );
};
