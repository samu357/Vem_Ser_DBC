import styles from "../loader/Loader.module.css";
import img from "../../image/loader.gif"

const Loader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="gif load" />
    </div>
  )
}

export default Loader;