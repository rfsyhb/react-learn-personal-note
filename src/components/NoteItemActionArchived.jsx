import React from "react";

function NoteItemActionArchived ({ id, onDeleteHandler, onUnarchiveHandler }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDeleteHandler(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={() => onUnarchiveHandler(id)}>Pindahkan</button>
    </div>
  );
}

export default NoteItemActionArchived;