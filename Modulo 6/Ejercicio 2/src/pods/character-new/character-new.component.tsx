import { getCharacterCollection } from 'pods/character-collection/api';
import { Character } from 'pods/character/api';
import React from 'react';
import { createCharacter } from './api';
import * as classes from './character-new.styles';

interface Props {
}

export const NewCharacterComponent: React.FunctionComponent<Props> = (props) => {

  const [ name, setName ] = React.useState('');
  const [ gender, setGender ] = React.useState('');
  const [ specie, setSpecie ] = React.useState('');
  const [ status, setStatus ] = React.useState('');
  const [ image, setImage ] = React.useState('');

  const [ error, setError ] = React.useState(false);

  const [maxId, setMaxId ] = React.useState<number>(Number.MAX_VALUE);

  React.useEffect(() => {
    getCharacterCollection().then(response => {
      setMaxId(Math.max(...response.map(x => x.id)) + 1);
    });
  }, []);

  const characterInfo = () => {

    const handleName = (e) => {
      setName(e.target.value);
    }

    const handleGender = (e) => {
      setGender(e.target.value);
    }

    const handleSpecie = (e) => {
      setSpecie(e.target.value);
    }

    const handleStatus = (e) => {
      setStatus(e.target.value);
    }

    const handleImage = (e) => {
      setImage(e.target.value);
    }

    const addCharacter = () => {
      if(name && gender && specie && status) {

        const newChar: Character = {
          id: maxId,
          gender: gender,
          name: name,
          species: specie,
          status: status,
          image: image ? image : "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
          bestSentences: ['']
        }
        createCharacter(newChar);
        history.back();

      } else {
        setError(true);
      }
    }

    const showError = () => {

      if(error) {
        return <div className={classes.error}>* Faltan campos obligatorios</div>;
      } else {
        return <></>;
      }
    }

    return <div className={classes.characterContainer}>
                <label>
                <strong>*</strong> Nombre :
                <input type="text" name="name" className={classes.characterInput} value={name} onChange={handleName}/>
                </label>
                <label>
                <strong>*</strong> Genero :
                <input type="text" name="gender" className={classes.characterInput} value={gender} onChange={handleGender}/>
                </label>
                <label>
                <strong>*</strong> Especie :
                <input type="text" name="specie" className={classes.characterInput} value={specie} onChange={handleSpecie}/>
                </label>
                <label>
                <strong>*</strong> Estado :
                <input type="text" name="status" className={classes.characterInput} value={status} onChange={handleStatus}/>
                </label>
                <label>
                Imagen :
                <input type="text" name="imagen" className={classes.characterInput} value={image} onChange={handleImage}/>
                </label>
                * Campo obligatorio
                {showError()}
                <button onClick={e => addCharacter()} className={classes.addButton}>Crear</button>
           </div>;
  }

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
