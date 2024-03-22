import React from "react";

function NoteItemContent({ title, body, createdAt, dateConverter }) {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{dateConverter(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;