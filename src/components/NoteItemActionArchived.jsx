import React from "react";

function NoteItemActionArchived({ id, onUnarchive, onDelete }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={onDelete(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={onUnarchive(id)}>Pindahkan</button>
    </div>
  );
}

export default NoteItemActionArchived;