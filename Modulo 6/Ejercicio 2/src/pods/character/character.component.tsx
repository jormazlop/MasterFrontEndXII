import React from 'react';
import { Character, updateCharacter } from './api';
import * as classes from './character.styles';

interface Props {
  character: Character
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {

  const { character } = props;

  const [ sentence, setSentence ] = React.useState('');

  const characterInfo = () => {

    const handleSentence = (e) => {
      setSentence(e.target.value);
    }

    const showBestSentences = () => {

      const deleteSentence = (index: number) => {
        character.bestSentences.splice(index, 1);
        updateCharacter(character);
        window.location.reload();
      }

      let sentences = [];

      if(!character.bestSentences) {
        return sentences;
      }

      let index = 0;

      for (const sentence of character.bestSentences) {
        if(sentence) {
          sentences.push(<div key={index} className={classes.sentencesContainer}>
                          <div>{sentence}</div>
                          <button className={classes.deleteSentence}
                                  onClick={ e => deleteSentence(index) }>Borrar frase</button>
                        </div>)
          index++;
        }

      }
      return sentences;
    }

    const addSentence = () => {
      if(sentence) {
        character.bestSentences.push(sentence);
        updateCharacter(character);
        setSentence('');
        window.location.reload();
      }
    }

    return <div className={classes.characterContainer}>
            <h1>Personaje numero { character.id }</h1>
            <img src={ character.image } alt="Character-Image" className={classes.characterImage} />
            <h2>Género de personaje : { character.gender }</h2>
            <h2>Nombre de personaje : { character.name }</h2>
            <h2>Especie de personaje : { character.species }</h2>
            <h2>Estado del personaje : { character.status }</h2>
            <h2>Mejores Frases : {showBestSentences()} </h2>
            <label>
            <input type="text" name="sentece" className={classes.bestSentenceInput} value={sentence} onChange={handleSentence}/>
            </label>
            <button className={classes.addSentence} onClick={e => addSentence()}>Añadir frase</button>
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
