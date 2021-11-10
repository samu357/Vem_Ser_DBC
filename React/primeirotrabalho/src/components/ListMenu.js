import ItemMenu from "./ItemMenu";
import styles from "./ListMenu.module.css";

function ListMenu() {
  return (
    <div className={styles.listMenuDiv}>
      <ul>
        <ItemMenu menu="Home" />
        <ItemMenu menu="Sobre" />
        <ItemMenu menu="Contato" />
      </ul>
    </div>
  )
}

export default ListMenu;