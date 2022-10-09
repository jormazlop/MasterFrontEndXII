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

  const closeSearch = () => {
    setSearch('');
    setCharacterCollection(characterInitialCollection);
  }

  const showButtonClose = () => {
    return search ? <img onClick={e => closeSearch()} className={classes.closeSearchButton} src="../../assets/close-search.png" alt="Close" /> : <></>;
  }

  const handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      buttonSearch();
    }

    if(e.key === 'Escape') {
      closeSearch();
    }
  }

  return (
    <div>
      <div className={classes.searchContainer}>
        <input placeholder="Buscar personaje..."
               type="text"
               value={search}
               onChange={handleChange}
               onKeyUp={handleKeyUp}
               className={classes.searchInput}/>
        {showButtonClose()}
        <button onClick={e => buttonSearch()} className={classes.searchButton}>Buscar</button>
      </div>
      <CharacterCollectionComponent characterCollection={characterCollection}/>
    </div>
  );
};
