export default function notesReducer(notes, action) {
  switch (action.type) {
    case "added": {
      const newNote = {
        id: action.id,
        title: "New Note",
        content: "Description",
      };

      return [...notes, newNote];
    }
    case "edited": {
      return notes.map((note) => {
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
