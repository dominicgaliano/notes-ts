// Shared type for notes
export type Note = {
  id: string;
  title: string;
  content: string;
};

type DispatchAction = {
  type: string;
  note?: Note;
  id: string;
};
