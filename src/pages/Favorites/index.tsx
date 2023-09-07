import { useAtom } from "jotai";
import DogCard from "../../components/DogCard";
import Pagination from "../../components/styled/Pagination";
import { favoritesAtom } from "../../core/store/favoritesAtom";
import { userAtom } from "../../core/store/userAtom";
const Favorites = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const dogs = favorites.dogs;

  if (!storeUser.isLoggedIn) {
    return (
      <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary">
        Please login to start searching for your new best friend!
      </div>
    )
  }

  return (
    <div className="relative flex flex-wrap gap-4 h-full w-full">
      {
        !dogs.length &&
        <div className="w-full flex justify-center">
          <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary">
            Oops, no results were found.
          </div>
        </div>
      }
      {!!dogs.length && dogs.map(dog => {
        return (
          <DogCard dog={dog} key={dog.id} />
        )
      })}
    </div>
  );
};

export default Favorites;
