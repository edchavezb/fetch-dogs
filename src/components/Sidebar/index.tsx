import { useAtom } from "jotai";
import { userAtom } from "../../core/store/userAtom";
import Filters from "../Filters";
import { Link, useLocation } from "react-router-dom";
import Button from "../styled/Button";
import { favoritesAtom } from "../../core/store/favoritesAtom";
import { getDogMatchApi } from "../../core/api/dogs";
import { errorAtom } from "../../core/store/errorAtom";

const Sidebar = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [error, setError] = useAtom(errorAtom);
  const dogs = favorites.dogs;
  const match = favorites.match;
  const location = useLocation();
  const currentPath = location.pathname;

  const handleGetMatch = async () => {
    try {
      const matchedResponse = await getDogMatchApi(dogs.map(dog => dog.id));
      if (matchedResponse) {
        const matchedDog = dogs.find(dog => dog.id === matchedResponse.match);
        setFavorites({ ...favorites, match: matchedDog });
        setError({ isError: false, message: "" });
      }
    }
    catch (err) {
      setError({ isError: true, message: (err as Error).message });
    }
  }

  const handleUndoMatch = async () => {
    setFavorites({ ...favorites, match: undefined });
  }

  if (!storeUser.isLoggedIn) {
    return (
      <></>
    )
  }

  return (
    <div className='rounded-md border bg-white sticky top-0 p-4 z-40'>
      {
        currentPath === '/' &&
        <Filters />
      }
      {
        currentPath === '/match' &&
        <>
          <div className='mb-8'>
            <Link to={"/"} className="text-bodyText font-semibold font-lexend"> {"< Return to search"} </Link>
          </div>
          <Button style={'secondary'} text={match ? 'Undo match' : 'Get matched with a dog now'} disabled={!dogs.length} onClick={match ? handleUndoMatch : handleGetMatch} />
        </>
      }
    </div>
  )
}

export default Sidebar;