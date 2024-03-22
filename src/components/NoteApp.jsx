import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteHeader from "./NoteHeader";

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

  render() {
    return (
      <div>
        <NoteHeader onSearch={this.onSearchHandler}/>
        {showFormattedDate(this.state.notes[0].createdAt)}
      </div>
    )
  }
}

export default NoteApp;