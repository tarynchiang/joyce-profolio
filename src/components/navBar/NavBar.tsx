import { Component } from "react";
import FilterBar from "../FilterBar/FilterBar";
import styles from "./NavBar.module.scss";
import { ReactComponent as YuLogo } from "../../assets/yu-logo.svg";

export default class NavBar extends Component {
  state = {
    chosen: "chia",
  };

  render() {
    return (
      <div className={styles["nav-container"]}>
        <div className={styles["nav-content"]}>
          <div className={styles["left-container"]}>
            <FilterBar />
          </div>
          <div className={styles["right-container"]}>
            <button>CHIA&</button>
            <button>
              <YuLogo className={styles["yu-logo"]} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
