import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, body, createdAt, dateConverter }) {
  return (
    <div className="note-item">
    <NoteItemContent
      title={title}
      body={body}
      createdAt={createdAt}
      dateConverter={dateConverter}
      />
    <h1>Reserved buat button</h1>
    </div>
  );
}

export default NoteItem;