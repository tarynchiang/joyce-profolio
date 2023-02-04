import { Component } from "react";
import styles from "./Background.module.scss";

export default class Background extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <img
          className={styles.ellipse}
          src="/images/ellipse.svg"
          alt="ellipse"
        />
        <img
          className={styles.triangle}
          src="/images/triangle.svg"
          alt="triangle"
        />
      </div>
    );
  }
}
