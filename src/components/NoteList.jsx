import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, dateConverter }) {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return (
          <NoteItem 
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            dateConverter={dateConverter}
          />
        );
      })}
    </div>
  );
}

export default NoteList;