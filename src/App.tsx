import { Header } from "./components/Header.tsx";
import { useReducer, useEffect } from "react";
import notesReducer from "./reducers/notesReducer.ts";
import NoteCard from "./components/NoteCard.tsx";
import "./App.css";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, null, loadNotes);

  // add notes to localStorage on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteAllNotes={handleDeleteAllNotes}
      />
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

  // TODO: Figure out how/best way to move these functions to another file
  function loadNotes() {
    const loadedNotes = JSON.parse(localStorage.getItem("notes"));
    return loadedNotes || [];
  }

  function handleAddNote() {
    dispatch({
      type: "ADD_NOTE",
    });
  }

  function handleEditNote(editedNote) {
    dispatch({
      type: "EDIT_NOTE",
      note: editedNote,
    });
  }

  function handleDeleteNote(noteId) {
    dispatch({
      type: "DELETE_NOTE",
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
        type: "DELETE_ALL",
      });
    }
  }
}

export default App;
