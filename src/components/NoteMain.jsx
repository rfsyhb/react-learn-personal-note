import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteMain({ addNote, notes, getformattedDate, onDelete, onArchive, onUnarchive}) {
  return (
    <main className="note-main">
      <NoteInput addNote={addNote}/>
      <NoteList 
        notes={notes} 
        getformattedDate={getformattedDate} 
        onDelete={onDelete} 
        onArchive={onArchive} 
        onUnarchive={onUnarchive}
      />
    </main>
  );
}

export default NoteMain;