import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  onChangeTitleHandler = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50){
      this.setState({
        title: newTitle,
      });
    }
  }

  onChangeBodyHandler = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  onSubmitInputHandler = (event) => {
    event.preventDefault();
    this.props.onSubmitInput(this.state);
    this.setState({
      title: '',
      body: ''
    })
  }

  renderTitleCharLimit() {
    const title = this.state.title;
    const charLeft = 50 - title.length;
    return charLeft === 0 ? 'Karakter sudah batas limit!' : `Karakter tersedia: ${charLeft}`;
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitInputHandler}>
        <input type="text" className="note-input__title" value={this.state.title} onChange={this.onChangeTitleHandler}/>
        <p className="note-input__title__char-limit">{this.renderTitleCharLimit()}</p>
        <textarea type="text" className="note-input__body" value={this.state.body} onChange={this.onChangeBodyHandler}/>
        <button>Buat</button>
      </form>
    );
  }
}

export default NoteInput;