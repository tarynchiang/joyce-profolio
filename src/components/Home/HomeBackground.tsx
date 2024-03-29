import { Component } from "react";
import styles from "./Home.module.scss";
import ellipse from "../../assets/images/ellipse.svg";
import triangle from "../../assets/images/triangle.svg";

export default class HomeBackground extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <img className={styles.ellipse} src={ellipse} alt="ellipse" />
        <img className={styles.triangle} src={triangle} alt="triangle" />
      </div>
    );
  }
}
