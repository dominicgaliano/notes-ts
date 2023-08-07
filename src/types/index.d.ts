// Shared type for notes
export type Note = {
  id: string;
  title: string;
  content: string;
};

declare enum REDUCER_ACTION_TYPE {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  DELETE_ALL,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  note?: Note;
  id?: string;
};
