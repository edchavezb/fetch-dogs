import { useAtom } from 'jotai';
import { Dog } from '../../core/types/interfaces';
import { favoritesAtom } from '../../core/store/favoritesAtom';

interface DogCardProps {
  dog: Dog
}

function DogCard({ dog }: DogCardProps) {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const isFavorite = favorites.dogs.some(favorite => favorite.id === dog.id);

  const handleSaveDog = () => {
    setFavorites(favorites => ({dogs: [...favorites.dogs, dog]}));
  }

  const handleUnsaveDog = () => {
    setFavorites(favorites => ({dogs: favorites.dogs.filter(favorite => favorite.id !== dog.id)}));
  }

  return (
    <div className="flex flex-row md:flex-col w-full md:w-[48.5%] lg:w-[23.5%] overflow-hidden rounded-[5px] shadow-dogCard">
      <div className="relative h-full md:h-[150px] w-[40%] md:w-auto shrink-0">
        <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${dog.img})` }}></div>
      </div>
      <div className="p-4 bg-white grow flex flex-col">
        <div>
          <span className="font-bold font-lexend text-bodyText"> {dog.name} </span>
          <div className="text-md">
            <div className="flex justify-between text-cardText"><span>Age:</span> <span className='text-right'>{dog.age} years</span></div>
            <div className="flex justify-between text-cardText"><span>Zip Code:</span> <span className='text-right'>{dog.zip_code}</span></div>
            <div className="flex justify-between text-cardText"><span>Breed:</span> <span className='text-right'>{dog.breed}</span></div>
          </div>
        </div>
        <div className="flex justify-center mt-4 grow items-end">
          <button
            onClick={isFavorite ? handleUnsaveDog : handleSaveDog}
            className={isFavorite ? "btn rounded-full bg-secondary text-white normal-case h-[30px] min-h-0 py-[4px]" : "btn rounded-full bg-primary text-white normal-case h-[30px] min-h-0 py-[4px]"}>
            &#10084; {isFavorite ? 'In favorites' : 'Add to favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogCard;
