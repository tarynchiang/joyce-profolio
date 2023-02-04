import styles from "./Project.module.scss";

type ProjectType = {
  icon: string;
  name: string;
  type: string;
};

export default function Project(props: ProjectType) {
  return (
    <div className={styles["project-container"]}>
      <div className={styles["logo-container"]}>
        <img src={props.icon} alt="project-logo" />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.type}>{props.type}</div>
      </div>
    </div>
  );
}
