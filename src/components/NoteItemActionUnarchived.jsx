import React from "react";

function NoteItemActionUnarchived({ id, onDeleteHandler, onArchiveHandler }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={onDeleteHandler(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={onArchiveHandler(id)}>Arsipkan</button>
    </div>
  );
}