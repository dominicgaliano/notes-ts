import { v4 as uuidv4 } from "uuid";

type note = {
  id: string;
  title: string;
  content: string;
};

export default function notesReducer(notes: [note], action) {
  switch (action.type) {
    case "added": {
      const newNote: note = {
        id: uuidv4(),
        title: "New Note",
        content: "Description",
      };

      return [...notes, newNote];
    }
    case "edited": {
      return notes.map((note: note) => {
        if (note.id === action.note.id) {
          return action.note;
        } else {
          return note;
        }
      });
    }
    case "deleted": {
      return notes.filter((note) => note.id !== action.id);
    }
    case "clearedAll": {
      return [];
    }
    default: {
      throw Error("Unknown action: ", action.type);
    }
  }
}
