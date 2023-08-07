import React from "react";

export function Header({ notes, handleAddNote, handleDeleteAllNotes }) {
  return (
    <div className="notes-header">
      <button onClick={handleAddNote}>New Note</button>
      {notes.length > 0 ? (
        <button onClick={handleDeleteAllNotes}> Clear All</button>
      ) : (
        <></>
      )}
    </div>
  );
}
