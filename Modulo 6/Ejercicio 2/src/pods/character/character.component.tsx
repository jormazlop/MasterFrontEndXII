import React from 'react';
import { Character } from './api';
import * as classes from './character.styles';

interface Props {
  character: Character
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {

  const { character } = props;

  const characterInfo = () => {

    return <div className={classes.characterContainer}>
            <h1>Personaje numero { character.id }</h1>
            <img src={ character.image } alt="Character-Image" className={classes.characterImage} />
            <h2>Género de personaje : { character.gender }</h2>
            <h2>Nombre de personaje : { character.name }</h2>
            <h2>Especie de personaje : { character.species }</h2>
            <h2>Estado del personaje : { character.status }</h2>
           </div>;
  };

  const returnButton = () => {
    history.back();
  }

  return (
    <div>
      <button className={classes.returnButton} onClick={e => returnButton()}>Volver</button>
      {characterInfo()}
    </div>
  );
};
