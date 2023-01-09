import { Component } from "react";
import FilterBar from "../filterBar/FilterBar";
import styles from "./NavBar.module.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className={styles["nav-container"]}>
        <div className={styles["left-container"]}>
          <FilterBar />
        </div>
        <div className={styles["right-container"]}>
          <button>CHIA&</button>
          <button>
            <img
              className={styles["yu-logo"]}
              src="/images/yu-logo.svg"
              alt="yu-logo"
            />
          </button>
        </div>
      </div>
    );
  }
}
