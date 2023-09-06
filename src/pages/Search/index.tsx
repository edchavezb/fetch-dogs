import { useEffect, useState } from "react";
import { Dog } from "../../core/types/interfaces";
import { dogSearchApi, getDogsByIdApi } from "../../core/api/dogs";
import { useAtom } from "jotai";
import { searchAtom } from "../../core/store/searchAtom";
import DogCard from "../../components/DogCard";

const Search = () => {
  const [searchStore, setSearchStore] = useAtom(searchAtom);
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    handleSearch();
  }, [])

  const handleSearch = async () => {
    try {
      const searchResults = await dogSearchApi(1);
      if (searchResults) {
        const dogIds = searchResults.resultIds;
        setSearchStore({ searchResults: dogIds });
        handleGetDogs(dogIds);
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleGetDogs = async (dogIds: string[]) => {
    const dogsResponse = await getDogsByIdApi(dogIds);
    if (dogsResponse) {
      setDogs(dogsResponse);
    }
  }

  return (
    <div className="flex flex-wrap gap-4 h-full">
      {dogs.map(dog => {
        return (
          <DogCard dog={dog} key={dog.id} />
        )
      })}
    </div>
  );
};

export default Search;
