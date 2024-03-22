import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, getformattedDate, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return (
          <NoteItem 
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={getformattedDate(note.createdAt)}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        );
      })}
    </div>
  );
}

export default NoteList;