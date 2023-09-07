import { useEffect, useState } from "react";
import { Dog } from "../../core/types/interfaces";
import { dogSearchApi, getDogsByIdApi } from "../../core/api/dogs";
import { useAtom } from "jotai";
import { searchAtom } from "../../core/store/searchAtom";
import DogCard from "../../components/DogCard";
import { filtersAtom } from "../../core/store/filtersAtom";
import Pagination from "../../components/styled/Pagination";
import { userAtom } from "../../core/store/userAtom";

const Search = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);
  const [searchStore, setSearchStore] = useAtom(searchAtom);
  const [filters, setFilters] = useAtom(filtersAtom);
  const { selectedZipCodes, selectedDogBreeds, ageMin, ageMax } = filters;
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleSearch();
  }, [selectedZipCodes, selectedDogBreeds, ageMin, ageMax, page])

  const handleSearch = async () => {
    try {
      const dogBreeds = selectedDogBreeds.map(breed => breed.value);
      const zipCodes = selectedZipCodes.map(code => code.value);
      const searchResults = await dogSearchApi(((page - 1) * 20).toString(), zipCodes, dogBreeds, ageMin?.value, ageMax?.value);
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
      setIsLoading(false);
    }
  }

  if (!storeUser.isLoggedIn) {
    return (
      <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary shadow-dogCard">
        Please login to start searching for your new best friend!
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="p-6 rounded-lg flex items-center justify-center text-primary">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="relative flex flex-wrap gap-4 h-full w-full">
      {
        !dogs.length &&
        <div className="w-full flex justify-center">
          <div className="h-[250px] w-[400px] p-6 rounded-lg flex items-center justify-center bg-white font-lexend font-bold text-lg text-primary shadow-dogCard">
            Oops, no results were found.
          </div>
        </div>
      }
      {!!dogs.length && dogs.map(dog => {
        return (
          <DogCard dog={dog} key={dog.id} />
        )
      })}
      <div className="sticky bottom-0 w-full flex justify-center px-10">
        <Pagination decrease={() => setPage(page => page - 1)} increase={() => setPage(page => page + 1)} value={page} />
      </div>
    </div>
  );
};

export default Search;
