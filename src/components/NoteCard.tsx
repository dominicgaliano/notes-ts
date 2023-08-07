import { useState } from "react";
import { FaTrash, FaPencil, FaCheck, FaX } from "react-icons/fa6";

export default function NoteCard({ note, handleDeleteNote, handleEditNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [prevNote, setPrevNote] = useState();

  function noteIsValid(note) {
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
                  handleEditNote({
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
                  handleEditNote({
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
              handleEditNote(prevNote);
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
          <button onClick={() => handleDeleteNote(note.id)}>
            <FaTrash />
          </button>
        </div>
      )}
    </li>
  );
}
