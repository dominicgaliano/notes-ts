import { useState } from "react";
import { FaTrash, FaPencil, FaCheck, FaX } from "react-icons/fa6";
import { Note } from "../types";
import { handleEditNote, handleDeleteNote } from "../utils";

export default function NoteCard({ note, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [prevNote, setPrevNote] = useState();

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
        <div>
          <form>
            <i>{note.id}</i>
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
                className="title-input"
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
                className="description-input"
              />
            </label>
          </form>
          <hr></hr>
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
              handleEditNote(dispatch, prevNote);
              setIsEditing(false);
            }}
          >
            <FaX />
          </button>
        </div>
      ) : (
        <div>
          <i>{note.id}</i>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <hr></hr>
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
      )}
    </li>
  );
}
