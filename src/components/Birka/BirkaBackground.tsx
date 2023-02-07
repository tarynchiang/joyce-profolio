import { Component } from "react";
import styles from "./Birka.module.scss";
import birkaLogo from "../../assets/images/birka-bg.svg";

export default class BirkaBackground extends Component {
  render() {
    return (
      <div className={styles["bg-container"]}>
        <div className={`${styles.section} ${styles.one}`}>
          <img
            className={styles["birka-img"]}
            src={birkaLogo}
            alt="birka-logo"
          />
        </div>
        <div className={`${styles.section}  ${styles.two}`}></div>
      </div>
    );
  }
}
