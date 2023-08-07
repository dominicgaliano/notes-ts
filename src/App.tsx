import { Header } from "./components/Header.tsx";
import { useReducer, useEffect } from "react";
import notesReducer from "./reducers/notesReducer.ts";
import NoteCard from "./components/NoteCard.tsx";
import "./App.css";
import {
  loadNotes,
  handleAddNote,
  handleEditNote,
  handleDeleteNote,
  handleDeleteAllNotes,
} from "./utils";

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
        dispatch={dispatch}
        handleAddNote={handleAddNote}
        handleDeleteAllNotes={handleDeleteAllNotes}
      />
      <div>
        <ul className="notes-list">
          {notes.map((note) => {
            return (
              <NoteCard
                note={note}
                dispatch={dispatch}
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
}

export default App;
