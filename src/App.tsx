import { useReducer, useEffect } from "react";
import notesReducer from "./notesReducer.ts";
import { v4 as uuidv4 } from "uuid";
import NoteCard from "./NoteCard.tsx";
import "./App.css";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, null, loadNotes);

  // add notes to localStorage on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <div className="notes-header">
        <button onClick={handleAddNote}>New Note</button>
        {notes.length > 0 ? (
          <button onClick={handleDeleteAllNotes}> Clear All</button>
        ) : (
          <></>
        )}
      </div>
      <div>
        <ul className="notes-list">
          {notes.map((note) => {
            return (
              <NoteCard
                note={note}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
                key={note.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );

  function loadNotes() {
    const loadedNotes = JSON.parse(localStorage.getItem("notes"));
    return loadedNotes || [];
  }

  function handleAddNote() {
    dispatch({
      type: "added",
      id: uuidv4(),
    });
  }

  function handleEditNote(editedNote) {
    dispatch({
      type: "edited",
      note: editedNote,
    });
  }

  function handleDeleteNote(noteId) {
    dispatch({
      type: "deleted",
      id: noteId,
    });
  }

  function handleDeleteAllNotes() {
    if (
      window.confirm(
        "Are you sure you want to clear all?\nThis action cannot be undone"
      )
    ) {
      dispatch({
        type: "clearedAll",
      });
    }
  }
}

export default App;
