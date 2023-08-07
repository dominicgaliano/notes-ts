import { v4 as uuidv4 } from "uuid";
import { Note, ReducerAction } from "../types";
import { REDUCER_ACTION_TYPE } from "../utils";

export default function notesReducer(
  notes: Note[],
  action: ReducerAction
): Note[] {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_NOTE: {
      const newNote: Note = {
        id: uuidv4(),
        title: "New Note",
        content: "Description",
      };

      return [...notes, newNote];
    }
    case REDUCER_ACTION_TYPE.EDIT_NOTE: {
      // type check
      if (!action.note) {
        throw Error("No note passed in dispatch");
      }

      return notes.map((note: Note) => {
        if (note.id === action.note!.id) {
          return action.note!;
        } else {
          return note;
        }
      });
    }
    case REDUCER_ACTION_TYPE.DELETE_NOTE: {
      return notes.filter((note) => note.id !== action.id);
    }
    case REDUCER_ACTION_TYPE.DELETE_ALL: {
      return [];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
