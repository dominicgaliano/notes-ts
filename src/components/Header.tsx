import { handleAddNote, handleDeleteAllNotes } from "../utils";
import { Note, ReducerAction } from "../types";

type Props = {
  notes: Note[];
  dispatch: React.Dispatch<ReducerAction>;
};

export function Header({ notes, dispatch }: Props): React.ReactElement {
  return (
    <div className="notes-header">
      <button onClick={() => handleAddNote(dispatch)}>New Note</button>
      {notes.length > 0 ? (
        <button onClick={() => handleDeleteAllNotes(dispatch)}>
          {" "}
          Clear All
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
