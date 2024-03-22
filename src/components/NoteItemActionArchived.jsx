import React from "react";

function NoteItemActionArchived ({ id }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" >Hapus</button>
      <button className="note-item__archve-button" >Pindahkan</button>
    </div>
  );
}

export default NoteItemActionArchived;