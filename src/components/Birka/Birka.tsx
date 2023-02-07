import { Component } from "react";
import styles from "./Birka.module.scss";
import BirkaBackground from "./BirkaBackground";
import birkaPage from "../../assets/images/birka-page.svg";
import Tag from "../Tag";
export default class Birka extends Component {
  render() {
    return (
      <div className={styles["birka-container"]}>
        <BirkaBackground />
        <div className={styles["content-container"]}>
          <div className={styles["birka-intro-wrapper"]}>
            <div className={styles["intro-header-wrapper"]}>
              <h2>
                Birka NFT <br />
                Swapping Platform
              </h2>
              <div className={styles["tags-wrapper"]}>
                <Tag>UI/UX design</Tag>
                <Tag>2022</Tag>
              </div>
            </div>
            <div className={styles["intro-content-wrapper"]}>
              <h3>Overview</h3>
              <p>
                Birka is not only a NFT marketplace but also a swapping
                platform. There are various NFT platforms, what makes Birka
                special? By integrating both marketplace and NFT swaps, Birka
                saves all NFT users a huge amount of time, finding the best
                match, posting your NFTs, or making swap deals in just a click.
              </p>
            </div>
          </div>
          <div className={styles["birka-page-wrapper"]}>
            <img src={birkaPage} alt="birka-page" />
          </div>
        </div>
      </div>
    );
  }
}
