import { Character } from 'pods/character/api';
import * as React from 'react';
import * as classes from './character-collection.styles';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

interface Props {
  characterCollection: Character[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  const history = useHistory();

  const loadCharacter = (id: number) => {
    history.push(linkRoutes.editCharacter(id.toString()));
  }

  const memberList = () => {

    const list = [];

       for(let character of characterCollection) {
          list.push(
          <div key={character.id} onClick={e => loadCharacter(character.id)} className={classes.characterContainer}>
            <img src={character.image} alt="Character" className={classes.characterImage}/>
            <div className={classes.characterDescription}>
              <h1 className={classes.characterName}>Nombre : {character.name}</h1>
              <h2 className={classes.characterSpecie}>Especie : {character.species}</h2>
              <h2 className={classes.characterStatus}>Estado : {character.status}</h2>
            </div>
          </div>);
       }

       return <>{list}</>;
  }

  return (
      <div className={classes.charactersPage}>
        {memberList()}
      </div>
  );
};
