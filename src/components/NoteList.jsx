import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, dateConverter, searchTitle }) {
  return (
    <div className="note-list">
      {notes
        .filter((note) => note.title.toLowerCase().includes(searchTitle))
        .map((note) => {
          return (
            <NoteItem 
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              dateConverter={dateConverter}
            />
          );
        })
      }
    </div>
  );
}

export default NoteList;