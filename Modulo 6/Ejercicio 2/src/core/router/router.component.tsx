import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { NewCharacterScene } from 'scenes/character-new.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.root]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.addCharacter}
          component={NewCharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
