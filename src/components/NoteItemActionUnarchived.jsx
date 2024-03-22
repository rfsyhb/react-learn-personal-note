import React from "react";

function NoteItemActionUnarchived({ id, onArchive, onDelete }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={onDelete(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={onArchive(id)}>Arsipkan</button>
    </div>
  );
}

export default NoteItemActionUnarchived;