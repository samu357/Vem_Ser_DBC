import styles from '../card/Card.module.css';


const Card = ({ list }) => {
  return (
    <ul>
      {list.map((notice, index) => (
          <li key={index}>
            <div className={styles.card}>
              <div className={styles.left}>
                <img
                  src={notice.multimedia && notice.multimedia[0].url}
                  width="300"
                  alt="notícia"
                />
              </div>
              <div className={styles.rigth}>
                <div className="noticeTitle">
                  <h2>{notice.title}</h2>
                  <span>{notice.byline}</span>
                </div>
                <div>
                  <p className={styles.abstract}>{notice.abstract}</p>
                </div>
              </div>
            </div>
          </li>
      ))}
    </ul>
  );
};

export default Card;