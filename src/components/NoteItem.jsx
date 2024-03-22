import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemActionArchived from "./NoteItemActionArchived";
import NoteItemActionUnarchived from "./NoteItemActionUnarchived";

function NoteItem({ id, title, body, date, archived, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} date={date} />
      {archived ? (
        <NoteItemActionArchived id={id} onUnarchive={onUnarchive} onDelete={onDelete} />
      ) : (
        <NoteItemActionUnarchived id={id} onArchive={onArchive} onDelete={onDelete} />
      )}
    </div>
  );
}

export default NoteItem;