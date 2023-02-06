import { Component } from "react";
import FilterList from "../FilterList/FilterList";
import styles from "./NavBar.module.scss";
import { ReactComponent as YuLogo } from "../../assets/images/yu-logo.svg";

type NavBarState = {
  selected: string;
};

export default class NavBar extends Component<{}, NavBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: "chia",
    };
  }

  handleClick(value: string) {
    this.setState({ selected: value });
  }

  render() {
    return (
      <div className={styles["nav-container"]}>
        <div className={styles["nav-content"]}>
          <div className={styles["left-container"]}>
            <FilterList />
          </div>
          <div className={styles["right-container"]}>
            <button
              onClick={() => this.handleClick("chia")}
              className={this.state.selected === "chia" ? styles.focused : ""}
            >
              CHIA&
            </button>
            <button
              onClick={() => this.handleClick("yu")}
              className={this.state.selected === "yu" ? styles.focused : ""}
            >
              <YuLogo className={styles["yu-logo"]} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
