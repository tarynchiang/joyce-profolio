import "./App.scss";
import { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Birka from "./components/Birka";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Routes>
          <Route path={"joyce-profolio/"} element={<Home />} />
          <Route path={"/joyce-profolio/birka"} element={<Birka />} />
        </Routes>
      </div>
    );
  }
}
