import * as React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render } from '@testing-library/react';

describe('common/ConfirmationDialogComponent', () => {

  it('should render all passing required properties when isOpen is true', () => {

    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => null,
      onClose: () => null,
      title: 'Title Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept'
      },
      children: 'This is a test'
    };

    const { queryByText } = render(
      <ConfirmationDialogComponent
        isOpen = {props.isOpen}
        onAccept={props.onAccept}
        onClose={props.onClose}
        title={props.title}
        labels={{
          closeButton: props.labels.closeButton,
          acceptButton: props.labels.acceptButton,
        }}
        children = {props.children}
      />
    );

    // Act

    // Assert
    expect(queryByText(props.title)).toBeInTheDocument();
    expect(queryByText(props.labels.acceptButton)).toBeInTheDocument();
    expect(queryByText(props.labels.closeButton)).toBeInTheDocument();
    expect(queryByText(props.children)).toBeInTheDocument();
  })

  it('should not render all passing required properties when isOpen is false', () => {

    // Arrange
    const props = {
      isOpen: false,
      onAccept: () => null,
      onClose: () => null,
      title: 'Title Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept'
      },
      children: 'This is a test'
    };

    const { queryByText } = render(
      <ConfirmationDialogComponent
        isOpen = {props.isOpen}
        onAccept={props.onAccept}
        onClose={props.onClose}
        title={props.title}
        labels={{
          closeButton: props.labels.closeButton,
          acceptButton: props.labels.acceptButton,
        }}
        children = {props.children}
      />
    );

    // Act

    // Assert
    expect(queryByText(props.title)).toBeNull();
    expect(queryByText(props.labels.acceptButton)).toBeNull();
    expect(queryByText(props.labels.closeButton)).toBeNull();
    expect(queryByText(props.children)).toBeNull();
  })

});
