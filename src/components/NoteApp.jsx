import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: ''
    };
    
  }

  // menyimpan searchTerm ke dalam state
  onSearchHandler = (searchTerm) => {
    this.setState(() => {
      return {
        search: searchTerm.toLowerCase()
      }
    });
  }

  onDeleteHandler = (id) => {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.filter((note) => note.id !== id);
      return {
        notes: updatedNotes
      };
    });
  }

  onArchiveHandler = (id) => {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        // bayangkan lagi keliling cek satu satu
        if (note.id === id) {
          return { 
            ...note, 
            archived: true 
          };
        } else {
          return note;
        }
      })
      return {
        notes: notes
      }
    })
  }

  onUnarchiveHandler = (id) => {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        // bayangkan lagi keliling cek satu satu
        if (note.id === id) {
          return { ...note, archived: false };
        }
        return note;
      })
      return {
        notes: notes
      }
    })
  }

  onSubmitInputHandler = ({ title, body }) => {
    const newNote = {
      id: Number(new Date()),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false
    }
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes, newNote
      ]
    }));
  }

  render() {
    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler}/>
        <div className="note-app__body">
          <NoteInput onSubmitInput={this.onSubmitInputHandler} />
          <NoteList 
            notes={this.state.notes}
            dateConverter={showFormattedDate}
            searchTitle={this.state.search}
            onDeleteHandler={this.onDeleteHandler}
            onArchiveHandler={this.onArchiveHandler}
            onUnarchiveHandler={this.onUnarchiveHandler}
          />
        </div>
      </>
    )
  }
}

export default NoteApp;