import React from "react";

class NoteInput extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  
  handleTitleChange = (event) => {
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }

  handleBodyChange = (event) => {
    this.setState(() => {
      return {
        body: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.title, this.state.body);
    this.setState({ title: "", body: "" });
  }

  renderTitleCharLimit() {
    const title = this.state.title;
    const charLeft = 50 - title.length;
    return charLeft === 0 ? 'Telah mencapai limit batas karakter!' : `Judul karakter tersedia: ${charLeft}`;
  }

  render() {
    return (
      <form className="note-input">
        <input
          className="note-input__title"
          type="text"
          placeholder="Judul note"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <p className="note-input__title__char-limit">{this.renderTitleCharLimit}</p>
        <textarea
          className="note-input__body"
          placeholder="Isi note"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <button type="submit" onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default NoteInput;