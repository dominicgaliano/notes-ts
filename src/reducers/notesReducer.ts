import { v4 as uuidv4 } from "uuid";
import { Note, DispatchAction } from "../types";

export default function notesReducer(notes: Note[], action: DispatchAction) {
  switch (action.type) {
    case "ADD_NOTE": {
      const newNote: Note = {
        id: uuidv4(),
        title: "New Note",
        content: "Description",
      };

      return [...notes, newNote];
    }
    case "EDIT_NOTE": {
      // type check
      if (!action.note) {
        throw Error("No note passed in dispatch");
      }

      return notes.map((note: Note) => {
        if (note.id === action.note!.id) {
          return action.note;
        } else {
          return note;
        }
      });
    }
    case "DELETE_NOTE": {
      return notes.filter((note) => note.id !== action.id);
    }
    case "DELETE_ALL": {
      return [];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
