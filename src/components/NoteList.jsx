import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, dateConverter, searchTitle }) {
  const filteredNotes = searchTitle.trim() === ''
    ? notes
    : notes.filter((note) => {
      const titleLower = note.title.toLowerCase();
      const searchLower = searchTitle.toLowerCase();
      return titleLower.includes(searchLower)
    });
  // const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTitle));
  
  // masih dalam object
  const UnarchivedNotes = filteredNotes.filter(note => !note.archived)
  const ArchivedNotes = filteredNotes.filter(note => note.archived)
  
  return (
    <div className="note-list">
      {UnarchivedNotes.length > 0
        ? UnarchivedNotes.map((note) => (
          <NoteItem 
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            dateConverter={dateConverter}
          />
        ))       
        : <p className="notes-list__empty-message">Tidak ada catatan</p>}
      {ArchivedNotes.length > 0
      ? ArchivedNotes.map((note) => (
        <NoteItem 
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          dateConverter={dateConverter}
        />
      ))
      :<p className="notes-list__empty-message">Tidak ada catatan</p>}
      
    </div>
  );
}

export default NoteList;