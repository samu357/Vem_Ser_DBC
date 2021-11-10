import styles from "./ItemHeader.module.css"


function ItemHeader() {
  const imgCogumelo = "https://images.vexels.com/media/users/3/131547/isolated/preview/b3f129bd0d9486b7a69a8feb4bfe4053-icone-de-circulo-de-cogumelo.png";
  return (
    <div className={styles.divHeader}>
      <img src={imgCogumelo} alt="logo" />
    </div>
  );
}

export default ItemHeader;
