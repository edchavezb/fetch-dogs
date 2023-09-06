import { Dog } from '../../core/types/interfaces';
import styles from './DogCard.module.css'

interface DogCardProps {
    dog: Dog
}

function DogCard({dog}: DogCardProps) {

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.dogImage} style={{backgroundImage: `url(${dog.img})`}}></div>
      </div>

      <div className={styles.dogInfo}>
        <div className={styles.infoBody}>
          <span className={styles.dogName}> {dog.name} </span>
          <div className={styles.dogStats}>
            <div className={styles.statsRow}><span>Age:</span> <span>{dog.age} years</span></div>
            <div className={styles.statsRow}><span>Zip Code:</span> <span>{dog.zip_code}</span></div>
            <div className={styles.statsRow}><span>Breed:</span> <span>{dog.breed}</span></div>
          </div>
          <div className={styles.temperContainer}>
            {/* {dog.temperament.split(", ").map(trait => {
              return (
                <div key={trait} className={styles.pill}>{`${trait}`}</div>
              )
            })} */}
          </div>
        </div>
        <div className={styles.infoFooter}>
          <button className={styles.likeButton}> Save dog </button>
        </div>
      </div>
    </div>
  );
}

export default DogCard;
