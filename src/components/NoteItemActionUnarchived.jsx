import React from "react";

function NoteItemActionUnarchived({ id }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" >Hapus</button>
      <button className="note-item__archive-button" >Arsipkan</button>
    </div>
  );
}

export default NoteItemActionUnarchived;