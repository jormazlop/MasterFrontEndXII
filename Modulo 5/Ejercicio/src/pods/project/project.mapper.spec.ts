import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';

describe('./pods/project/mapProjectFromApiToVm', () => {

  it('Should return empty object when entry null', () => {

    // Arrange
    const emptyProject = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(null);

    // Assert
    expect(result).toEqual(emptyProject);

  });

  it('Should return empty object when entry undefined', () => {

    // Arrange
    const emptyProject = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(undefined);

    // Assert
    expect(result).toEqual(emptyProject);

  });

  it('Should return empty object when entry empty', () => {

    // Arrange
    const emptyProject = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(emptyProject);

    // Assert
    expect(result).toEqual(emptyProject);

  });

  it('Should return one object with values when passing one object with values', () => {

    //Arrange
    const projectApi: apiModel.Project =
    {
      id: '1',
      name: 'Jorge',
      externalId: '77309521J',
      comments: 'Test',
      isActive: true,
      employees: []
    };

    //Act
    const resultProject = mapProjectFromApiToVm(projectApi);

    //Assert
    expect(resultProject).toEqual(projectApi);
  });

  it('Should return one object with values and employees when passing one object with values and employees', () => {

    //Arrange
    const apiEmployeeList: apiModel.EmployeeSummary[] = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Jorge',
      },
      {
        id: '2',
        isAssigned: false,
        employeeName: 'Pedro',
      },
      {
        id: '3',
        isAssigned: true,
        employeeName: 'Maria',
      },
      {
        id: '4',
        isAssigned: true,
        employeeName: 'Carmen',
      },
      {
        id: '5',
        isAssigned: true,
        employeeName: 'Paco',
      },
    ];

    const projectApi: apiModel.Project =
    {
      id: '1',
      name: 'Jorge',
      externalId: '77309521J',
      comments: 'Test',
      isActive: true,
      employees: apiEmployeeList
    };

    //Act
    const resultProject = mapProjectFromApiToVm(projectApi);

    //Assert
    expect(resultProject).toEqual(projectApi);
  });

});
