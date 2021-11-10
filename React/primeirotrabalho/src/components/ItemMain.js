import styles from "./ItemMain.module.css"
function ItemMain() {
  const image = "https://images.vexels.com/media/users/3/131547/isolated/preview/b3f129bd0d9486b7a69a8feb4bfe4053-icone-de-circulo-de-cogumelo.png"
  return (
    <div className={styles.mainDiv}>
      <section>

        <h1>Estamos Aprendendo React Com o Professor Mais Top Show Bala</h1>

        <div >
          <img src={image} alt="" />
          <p>Cogumelo da deepweb</p>
        </div>

        <div >
          <img src={image} alt="" />
          <p>Cogumelo da deepweb</p>
        </div>

        <div >
          <img src={image} alt="" />
          <p>Cogumelo da deepweb</p>
        </div>

        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex porro ea aperiam perferendis, cum a ipsum. Nobis nemo libero a debitis odio soluta voluptatibus porro. Nemo earum blanditiis excepturi!</p>

        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt vel delectus. Dolor itaque, temporibus nemo, aperiam nam accusamus reiciendis nulla perspiciatis a ipsum inventore, ut architecto repudiandae quod minima.
        </p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.880335381209!2d-51.17743633022461!3d-30.01619289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636519992464!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>


      </section>
    </div>
  )
}

export default ItemMain;