import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index.js";
import NoteHeader from "./NoteHeader";
import NoteMain from "./NoteMain";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  addNote = (title, body) => {
    const newNote = {
      id: Date.now(),
      title,
      body,
      archived: false,
      date: new Date(),
    };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  onDelete = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  onArchive = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: true };
          }
          return note;
        }),
      };
    });
  }

  onUnarchive = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: false };
          }
          return note;
        }),
      };
    });
  }
  
  render() {
    return (
      <>
        <NoteHeader />
        <NoteMain 
          notes={this.state.notes} 
          getformattedDate={showFormattedDate}
          addNote={this.addNote}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
          onUnarchive={this.onUnarchive}
        />
      </>
    );
  }
}

export default App;