import { useEffect, useState } from "react";
import { Dog } from "../../core/types/interfaces";
import { dogSearchApi, getDogsByIdApi } from "../../core/api/dogs";
import { useAtom } from "jotai";
import { searchAtom } from "../../core/store/searchAtom";
import DogCard from "../../components/DogCard";
import { filtersAtom } from "../../core/store/filtersAtom";
import Pagination from "../../components/styled/Pagination";

const Search = () => {
  const [searchStore, setSearchStore] = useAtom(searchAtom);
  const [filters, setFilters] = useAtom(filtersAtom);
  const {selectedZipCodes, selectedDogBreeds} = filters;
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleSearch();
  }, [selectedZipCodes, selectedDogBreeds, page])

  const handleSearch = async () => {
    try {
      const dogBreeds = selectedDogBreeds.map(breed => breed.value);
      const zipCodes = selectedZipCodes.map(code => code.value);
      const searchResults = await dogSearchApi(((page - 1) * 20).toString(), true, zipCodes, dogBreeds);
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
    <div className="relative flex flex-wrap gap-4 h-full">
      {dogs.map(dog => {
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
