import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div>
        <h1>Belajar React</h1>
        <p>React itu mudah!</p>
      </div>
    );
  }
}

export default App;