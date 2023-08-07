export function Header({
  notes,
  dispatch,
  handleAddNote,
  handleDeleteAllNotes,
}) {
  return (
    <div className="notes-header">
      <button onClick={() => handleAddNote(dispatch)}>New Note</button>
      {notes.length > 0 ? (
        <button onClick={() => handleDeleteAllNotes(dispatch)}>
          {" "}
          Clear All
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
