import React, { Component } from "react";
// Loading Screen on Page Load
export default class PreLoadScreen extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.PreLoadScreen = React.createRef();
  }
  componentDidMount() {
    // Setup for refs
    const PreLoadScreen = this.PreLoadScreen.current;
    // Runs on load
    window.onload = function() {
      window.setTimeout(fadeout, 2500);
    };

    // Removes Page using setTimeout
    function fadeout() {
      PreLoadScreen.style.display = "none";
    }
  }
  render() {
    return (
      <div className="preload" id="preload" ref={this.PreLoadScreen}>
        <div className="logo">
          <h1 className="preloadHeader">Space Project</h1>
        </div>
        <div className="loader-frame">
          <div className="loader1" id="loader1" />
          <div className="loader2" id="loader2" />
        </div>
      </div>
    );
  }
}
