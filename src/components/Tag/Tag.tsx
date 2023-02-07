import { Component } from "react";
import styles from "./Tag.module.scss";
type TagProps = {
  children: string;
  type?: "light" | "dark";
};

export default class Tag extends Component<TagProps> {
  constructor(props: TagProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={`${styles.tag} ${
          this.props.type === "light" ? styles.light : styles.dark
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}
