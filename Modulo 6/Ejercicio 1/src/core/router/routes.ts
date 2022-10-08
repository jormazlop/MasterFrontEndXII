import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  editCharacter: '/character/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
