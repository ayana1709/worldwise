/* eslint-disable react/prop-types */
import styles from "./BUtton.module.css";
function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}{" "}
    </div>
  );
}
export default Button;
