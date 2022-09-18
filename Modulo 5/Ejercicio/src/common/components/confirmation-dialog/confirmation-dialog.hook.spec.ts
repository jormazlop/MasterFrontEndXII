import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from 'common/models/lookup';


describe('common/ConfirmationDialogHook', () => {

  it('test creation', () => {

    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toStrictEqual(createEmptyLookup());
    expect(typeof result.current.onAccept).toBe('function');
    expect(typeof result.current.onClose).toBe('function');
    expect(typeof result.current.onOpenDialog).toBe('function');

  });

  it('test open dialog box', () => {

    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    act(() => {
      result.current.onOpenDialog(createEmptyLookup());
    })

    // Assert
    expect(result.current.isOpen).toBeTruthy();

  });

  it('test open and close dialog box', () => {

    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    act(() => {
      result.current.onOpenDialog(createEmptyLookup());
    })

    act(() => {
      result.current.onClose();
    })

    // Assert
    expect(result.current.isOpen).toBeFalsy();

  });

  it('test open dialog box with dialog', () => {

    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    const dialog = {id: '1', name: 'dialog test'}

    // Act
    act(() => {
      result.current.onOpenDialog(dialog);
    })

    // Assert
    expect(result.current.itemToDelete).toBe(dialog);

  });

});
