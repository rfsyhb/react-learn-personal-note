import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleSearchChange = (event) => {
    const title = event.target.value;
    this.setState({ title });
    this.props.onSearch(title);
  }
  
  render() {
    return (
      <header className="note-header">
        <h1>Notes App</h1>
        <form>
          <input
            className="note-input__title"
            type="text"
            placeholder="Cari note"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </form>
      </header>
    );
  }
}

export default NoteHeader;