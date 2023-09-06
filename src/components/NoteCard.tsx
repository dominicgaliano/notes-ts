import { useState } from "react";
import { FaTrash, FaPencil, FaCheck, FaX } from "react-icons/fa6";
import { handleEditNote, handleDeleteNote } from "../utils";
import { Note, ReducerAction } from "../types";
import "./NoteCard.css";

type Props = {
  note: Note;
  dispatch: React.Dispatch<ReducerAction>;
};

export default function NoteCard({
  note,
  dispatch,
}: Props): React.ReactElement {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [prevNote, setPrevNote] = useState<Note>();

  function noteIsValid(note: Note): boolean {
    if (!note.title || !note.content) {
      return false;
    }
    return true;
  }

  return (
    <li
      className="card"
      onDoubleClick={() => {
        setPrevNote(note);
        setIsEditing(true);
      }}
    >
      {isEditing ? (
        <>
          <form>
            {/* <i>{note.id}</i> */}
            <label>
              <input
                type="text"
                value={note.title}
                onChange={(e) =>
                  handleEditNote(dispatch, {
                    ...note,
                    title: e.target.value,
                  })
                }
                className="card--title-input"
              />
            </label>
            <label>
              <input
                type="text"
                value={note.content}
                onChange={(e) =>
                  handleEditNote(dispatch, {
                    ...note,
                    content: e.target.value,
                  })
                }
                className="card--desc-input"
              />
            </label>
          </form>
          <div className="card--buttons">
            <button
              onClick={() => {
                if (noteIsValid(note)) {
                  setIsEditing(false);
                  return;
                }
                // note missing fields
                alert("Note is missing one or more necessary fields.");
              }}
            >
              <FaCheck />
            </button>
            <button
              onClick={() => {
                handleEditNote(dispatch, prevNote!);
                setIsEditing(false);
              }}
            >
              <FaX />
            </button>
          </div>
        </>
      ) : (
        <>
          {/* <i>{note.id}</i> */}
          <h1 className="card--title">{note.title}</h1>
          <p className="card--desc">{note.content}</p>
          <div className="card--buttons">
            <button
              onClick={() => {
                setPrevNote(note);
                setIsEditing(true);
              }}
            >
              <FaPencil />
            </button>
            <button onClick={() => handleDeleteNote(dispatch, note.id)}>
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
