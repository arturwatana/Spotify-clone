import styles from "../ToogleInput/ToggleInput.module.css";

export default function ToggleInput() {
  return (
    <div className="flex justify-start items-center gap-3 w-3/4  ">
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.rounded}`}></span>
      </label>
      <p className="text-white">Lembrar de mim</p>
    </div>
  );
}
