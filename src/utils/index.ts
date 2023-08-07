import { Note, ReducerAction } from "../types";

export enum REDUCER_ACTION_TYPE {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  DELETE_ALL,
}

export function loadNotes(): Note[] {
  const data = localStorage.getItem("notes");

  if (!data) {
    return [];
  }

  try {
    const loadedNotes: Note[] = JSON.parse(data);
    return loadedNotes;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function handleAddNote(dispatch: React.Dispatch<ReducerAction>): void {
  dispatch({
    type: REDUCER_ACTION_TYPE.ADD_NOTE,
  });
}

export function handleEditNote(
  dispatch: React.Dispatch<ReducerAction>,
  editedNote: Note
): void {
  dispatch({
    type: REDUCER_ACTION_TYPE.EDIT_NOTE,
    note: editedNote,
  });
}

export function handleDeleteNote(
  dispatch: React.Dispatch<ReducerAction>,
  noteId: string
): void {
  dispatch({
    type: REDUCER_ACTION_TYPE.DELETE_NOTE,
    id: noteId,
  });
}

export function handleDeleteAllNotes(
  dispatch: React.Dispatch<ReducerAction>
): void {
  if (
    window.confirm(
      "Are you sure you want to clear all?\nThis action cannot be undone"
    )
  ) {
    dispatch({
      type: REDUCER_ACTION_TYPE.DELETE_ALL,
    });
  }
}
