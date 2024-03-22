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
    this.setState({
      title: event.target.value
    })
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

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitInputHandler}>
        <input type="text" className="note-input__title" onChange={this.onChangeTitleHandler}/>
        <p className="note-input__title-char-limit"></p>
        <textarea type="text" className="note-input__body" onChange={this.onChangeBodyHandler}/>
        <button>Buat</button>
      </form>
    );
  }
}

export default NoteInput;