import { handleAddNote, handleDeleteAllNotes } from "../utils";
import { Note, ReducerAction } from "../types";
import "./Header.css";

type Props = {
  notes: Note[];
  dispatch: React.Dispatch<ReducerAction>;
};

export function Header({ notes, dispatch }: Props): React.ReactElement {
  return (
    <header>
      <button className="header--item" onClick={() => handleAddNote(dispatch)}>
        New Note
      </button>
      {notes.length > 0 ? (
        <button
          className="header--item"
          onClick={() => handleDeleteAllNotes(dispatch)}
        >
          {" "}
          Clear All
        </button>
      ) : (
        <></>
      )}
    </header>
  );
}
