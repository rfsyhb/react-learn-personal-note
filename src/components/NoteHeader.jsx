import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onSearchChangeHandler = (e) => {
    this.setState({ search: e.target.value });
    this.props.onSearch(e.target.value.toLowerCase());
  }
  
  render() {
    return (
      <header className="note-app__header">
        <h1>Notes</h1>
        <input
          className="note-input__title"
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.onSearchChangeHandler}
        />
      </header>
    )
  }
}

export default NoteHeader;