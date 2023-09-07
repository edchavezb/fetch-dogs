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

      <div className="p-4 bg-white">
        <div>
          <span className="font-bold font-lexend text-bodyText"> {dog.name} </span>
          <div className={styles.dogStats}>
            <div className={styles.statsRow}><span>Age:</span> <span>{dog.age} years</span></div>
            <div className={styles.statsRow}><span>Zip Code:</span> <span>{dog.zip_code}</span></div>
            <div className={styles.statsRow}><span>Breed:</span> <span>{dog.breed}</span></div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="btn rounded-full bg-primary text-white normal-case h-[30px] min-h-0 py-[4px]"> &#10084; Add to favorites </button>
        </div>
      </div>
    </div>
  );
}

export default DogCard;
