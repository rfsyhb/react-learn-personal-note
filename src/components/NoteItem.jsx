import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemActionArchived from "./NoteItemActionArchived";
import NoteItemActionUnarchived from "./NoteItemActionUnarchived";

function NoteItem({ title, body, createdAt, dateConverter, archived, id, onDeleteHandler, onUnarchiveHandler, onArchiveHandler }) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        body={body}
        createdAt={createdAt}
        dateConverter={dateConverter}
      />
      {archived
        ? <NoteItemActionArchived 
            id={id}
            onDeleteHandler={onDeleteHandler}
            onUnarchiveHandler={onUnarchiveHandler}
          />
        : <NoteItemActionUnarchived 
            id={id}
            onDeleteHandler={onDeleteHandler}
            onArchiveHandler={onArchiveHandler}
          />
      }
    </div>
  );
}

export default NoteItem;