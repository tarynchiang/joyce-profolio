import "./App.scss";

import { Component } from "react";
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Background />
        <Home />
      </div>
    );
  }
}
