import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./FilterList.module.scss";

type FilterState = {
  selectedId: number;
};

const filterList = [
  "All Categories",
  "UI/UX Designer",
  "Visual Design",
  "Spatial Design",
];

export default class FilterList extends Component<{}, FilterState> {
  constructor(props: any) {
    super(props);
    this.state = { selectedId: 0 };
  }

  // filter() {
  //   console.log("filter");
  // }

  // reset() {
  //   console.log("reset");
  // }

  handleClick(id: number) {
    this.setState({ selectedId: id });
  }

  render() {
    return (
      <div className={styles.container}>
        {filterList.map((item, i) => (
          <Checkbox
            key={i}
            id={i}
            title={item}
            checked={i === this.state.selectedId}
            handleClick={this.handleClick.bind(this)}
          ></Checkbox>
        ))}
      </div>
    );
  }
}
