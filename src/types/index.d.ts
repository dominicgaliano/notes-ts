export type Note = {
  id: string;
  title: string;
  content: string;
};

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  note?: Note;
  id?: string;
};
