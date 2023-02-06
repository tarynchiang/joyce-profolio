import styles from "./Checkbox.module.scss";

type CheckboxPropType = {
  title: string;
  checked: boolean;
  id: number;
  handleClick: (id: number) => void;
};

export default function Checkbox(props: CheckboxPropType) {
  return (
    <div className={styles["checkbox-wrapper"]}>
      <input
        type="checkbox"
        onClick={() => props.handleClick(props.id)}
        checked={props.checked}
        onChange={() => {}}
      />
      <span className={styles.label}>{props.title}</span>
    </div>
  );
}
