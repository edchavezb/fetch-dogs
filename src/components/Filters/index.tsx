import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { getDogBreedsApi, zipCodesSearchApi } from "../../core/api/filters";
import Select, { SelectOption } from "../styled/Select";
import { MultiValue } from "react-select";
import Input from "../styled/Input";
import { filtersAtom } from "../../core/store/filtersAtom";

const Filters = () => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const {cityInput, stateOptions, selectedStates, zipCodeOptions, selectedZipCodes, dogBreedOptions, selectedDogBreeds} = filters;
  
  const [isPreciseLocation, setIsPreciseLocation] = useState(false);

  useEffect(() => {
    handleFetchBreeds();
  }, [])

  const handleFetchBreeds = async () => {
    try {
      const breedsResponse = await getDogBreedsApi();
      if (breedsResponse) {
        const breedOptions = breedsResponse.map(breed => ({ value: breed, label: breed }))
        setFilters(filters => ({...filters, dogBreedOptions: breedOptions}));
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleFetchZipCodes = async (city: string, states: string[]) => {
    try {
      const locations = await zipCodesSearchApi(city, states);
      if (locations && locations.total <= 300) {
        const zipCodeOptions = locations.results.map(location => ({ value: location.zip_code , label: location.zip_code }))
        setFilters(filters => ({...filters, zipCodeOptions, selectedZipCodes: []}));
        setIsPreciseLocation(true);
      }
      else {
        setIsPreciseLocation(false);
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  
  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCityInput = e.target.value;
    setFilters(filters => ({...filters, cityInput: newCityInput}));
    handleFetchZipCodes(newCityInput, selectedStates.map(state => state.value));
  }

  const handleStatesChange = (newValue: MultiValue<SelectOption>) => {
    const newStatesSelection = newValue;
    setFilters(filters => ({...filters, selectedStates: newStatesSelection}));
    handleFetchZipCodes(cityInput, newStatesSelection.map(state => state.value));
  }

  const handleZipCodesChange = (newValue: MultiValue<SelectOption>) => {
    setFilters(filters => ({...filters, selectedZipCodes: newValue}));
  }

  const handleBreedsChange = (newValue: MultiValue<SelectOption>) => {
    setFilters(filters => ({...filters, selectedDogBreeds: newValue}));
  }

  return (
    <div className="mt-4">
      <Input label={'City'} value={cityInput} onChange={handleCityInputChange} />
      <Select options={stateOptions} label={'State'} value={selectedStates} onChange={handleStatesChange} />
      <Select options={zipCodeOptions} label={'Zip Code'} value={selectedZipCodes} onChange={handleZipCodesChange} disabled={!zipCodeOptions.length} />
      {
        !isPreciseLocation &&
        <div className="text-red">Please narrow down your location to show you better results</div>
      }
      {!!dogBreedOptions.length &&
        <Select options={dogBreedOptions} label={'Breed'} value={selectedDogBreeds} onChange={handleBreedsChange} />
      }
    </div>
  )
}

export default Filters;