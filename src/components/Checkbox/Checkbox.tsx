import { useState } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxType = {
  children: string;
  handleChecked: () => void;
  handleUnchecked: () => void;
};

export default function Checkbox(props: CheckboxType) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    checked ? props.handleUnchecked() : props.handleChecked();
    setChecked(!checked);
  };

  return (
    <div className={styles["checkbox-wrapper"]}>
      <input type="checkbox" onClick={handleClick} />
      <span className={styles.label}>{props.children}</span>
    </div>
  );
}
