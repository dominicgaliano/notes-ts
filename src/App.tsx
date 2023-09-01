import { Header } from "./components/Header.tsx";
import { useReducer, useEffect } from "react";
import notesReducer from "./reducers/notesReducer.ts";
import NoteCard from "./components/NoteCard.tsx";
import "./App.css";
import { loadNotes } from "./utils";

function App(): React.ReactElement {
  const [notes, dispatch] = useReducer(notesReducer, null, loadNotes);

  // add notes to localStorage on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header notes={notes} dispatch={dispatch} />
      <main>
        <ul className="card-list">
          {notes.map((note) => {
            return <NoteCard note={note} dispatch={dispatch} key={note.id} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
