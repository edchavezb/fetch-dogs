import { useAtom } from "jotai";
import DogCard from "../../components/DogCard/DogCard";
import { favoritesAtom } from "../../core/store/favoritesAtom";
import { userAtom } from "../../core/store/userAtom";
const Favorites = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const dogs = favorites.dogs;
  const match = favorites.match;

  if (!storeUser.isLoggedIn) {
    return (
      <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary">
        Please login to see your favorites.
      </div>
    )
  }

  return (
    <div className="relative flex flex-wrap gap-4 h-full w-full">
      {
        !dogs.length &&
        <div className="w-full flex justify-center">
          <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary shadow-dogCard">
            You haven't added any dogs to your favorites yet.
          </div>
        </div>
      }
      {(!!dogs.length && !match) && dogs.map(dog => {
        return (
          <DogCard dog={dog} key={dog.id} />
        )
      })}
      {match &&
        <div className="w-full flex justify-center">
          <div className="h-[600px] w-full max-w-[800px] p-6 rounded-lg flex flex-col gap-8 items-center justify-center bg-white font-lexend font-bold text-lg text-primary shadow-dogCard">
            Congratulations, you have been matched with {match.name}!
            <img src={match.img} className="w-auto max-w-[90%] rounded-lg max-h-[400px]"></img>
          </div>
        </div>
      }
    </div>
  );
};

export default Favorites;
