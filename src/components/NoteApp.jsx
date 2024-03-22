import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";

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
        <div className="UJICOBA">
          <NoteList 
            notes={this.state.notes}
            dateConverter={showFormattedDate}
            searchTitle={this.state.search}
          />
        </div>
      </div>
    )
  }
}

export default NoteApp;