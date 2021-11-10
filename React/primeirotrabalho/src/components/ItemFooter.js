import ListMenu from "./ListMenu";
import styles from "./ItemFooter.module.css"

function ItemFooter() {
  return (
    <div className={styles.footerDiv}>
      <ListMenu />
      <address>AV Andaraí, 531 - Passo D'areia. Porto Alegre</address>
    </div >
  );
}

export default ItemFooter;