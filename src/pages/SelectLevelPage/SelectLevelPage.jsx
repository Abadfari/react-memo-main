import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";

export function SelectLevelPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/3/${checked ? true : false}`}>
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/6/${checked ? true : false}`}>
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/9/${checked ? true : false}`}>
              3
            </Link>
          </li>
        </ul>
        <div className={styles.modeButton}>
          <input
            className={styles.hiddenCheckbox}
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            id="threeMistakes"
          />
          <label htmlFor="threeMistakes">Три ошибки</label>
        </div>
      </div>
    </div>
  );
}
