import React from "react";
import { render } from "react-dom";
import marked from 'marked'

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Custom Codes
import sampleText from "./sampleText";

class App extends React.Component {
  state = {
    text: sampleText
  };

  setText = val => {
    const { value } = val.target;
    this.setState({ text: value });
  };

  convertText = text => {
    const converted = marked(text, {
      sanitize: true
    })
    return {
      __html: converted
    }
  }

  render() {
    return (
      <div className="container">
        <main>
          <div className="row">
            <div className="col-sm-6">
              <h3>Source</h3>
            </div>
            <div className="col-sm-6">
              <h3>Résultat</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <textarea
                value={this.state.text}
                className="form-control"
                rows="30"
                onChange={e => this.setText(e)}
              />
            </div>
            <div
              className="col-sm-6"
              dangerouslySetInnerHTML={this.convertText(this.state.text)}
            />
          </div>
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
