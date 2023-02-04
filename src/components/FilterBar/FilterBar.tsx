import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./FilterBar.module.scss";

export default class FilterBar extends Component {
  filter() {
    console.log("filter");
  }

  reset() {
    console.log("reset");
  }

  render() {
    const filterList = [
      "All Categories",
      "UI/UX Designer",
      "Visual Design",
      "Spatial Design",
    ];

    return (
      <div className={styles.container}>
        {filterList.map((item) => (
          <Checkbox handleChecked={this.filter} handleUnchecked={this.reset}>
            {item}
          </Checkbox>
        ))}
      </div>
    );
  }
}
