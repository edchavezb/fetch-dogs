import { useAtom } from "jotai";
import { useEffect } from "react";
import { getDogBreedsApi, locationsSearchApi } from "../../core/api/filters";
import MultiSelect, { SelectOption } from "../styled/MultiSelect";
import { MultiValue, SingleValue } from "react-select";
import { filtersAtom } from "../../core/store/filtersAtom";
import AsyncSelect from "../styled/AsyncSelect";

const Filters = () => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const { 
    stateOptions, 
    selectedStates, 
    cityOptions, 
    selectedCity, 
    zipCodeOptions, 
    selectedZipCodes, 
    dogBreedOptions, 
    selectedDogBreeds,
    ageOptions,
    ageMin,
    ageMax 
  } = filters;

  useEffect(() => {
    handleFetchBreeds();
  }, [])

  const handleFetchBreeds = async () => {
    try {
      const breedsResponse = await getDogBreedsApi();
      if (breedsResponse) {
        const breedOptions = breedsResponse.map(breed => ({ value: breed, label: breed }))
        setFilters(filters => ({ ...filters, dogBreedOptions: breedOptions }));
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleStatesChange = async (newValue: MultiValue<SelectOption>) => {
    const newStatesSelection = newValue;
    setFilters(filters => ({ ...filters, selectedStates: newStatesSelection }));
    try {
      const locations = await locationsSearchApi("", newStatesSelection.map(state => state.value));
      if (locations) {
        const zipCodeOptions = locations.results.map(location => ({ value: location.zip_code, label: location.zip_code }))
        const uniqueCities = Array.from(new Set(locations.results.map(location => `${location.city}, ${location.state}`)));
        const cityOptions = uniqueCities.map(city => ({ value: city, label: city }))
        setFilters(filters => ({ ...filters, zipCodeOptions, selectedZipCodes: [], cityOptions, selectedCity: undefined }));
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleCityChange = async (newValue: SingleValue<SelectOption>) => {
    const [newCity, newState] = newValue!.value.split(",");
    setFilters(filters => ({ ...filters, selectedCity: newValue! }));
    try {
      const locations = await locationsSearchApi(newCity || "", [newState.trim()]);
      if (locations) {
        const zipCodeOptions = locations.results.map(location => ({ value: location.zip_code, label: location.zip_code }))
        setFilters(filters => ({ ...filters, zipCodeOptions, selectedZipCodes: [] }));
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleCityInput = async (inputValue: string) => {
    const locations = await locationsSearchApi(inputValue, selectedStates.map(state => state.value));
    if (locations) {
      const uniqueCities = Array.from(new Set(locations.results.map(location => `${location.city}, ${location.state}`)));
      const cityOptions = uniqueCities.map(city => ({ value: city, label: city }))
      return cityOptions;
    }
    return [{ value: 'No results', label: 'No cities were found' }];
  }

  const handleZipCodesChange = (newValue: MultiValue<SelectOption>) => {
    setFilters(filters => ({ ...filters, selectedZipCodes: newValue }));
  }

  const handleBreedsChange = (newValue: MultiValue<SelectOption>) => {
    setFilters(filters => ({ ...filters, selectedDogBreeds: newValue }));
  }

  const handleAgeMinChange = (newValue: SingleValue<SelectOption>) => {
    setFilters(filters => ({ ...filters, ageMin: newValue! }));
  }

  const handleAgeMaxChange = (newValue: SingleValue<SelectOption>) => {
    setFilters(filters => ({ ...filters, ageMax: newValue! }));
  }

  return (
    <div className="mt-4">
      <MultiSelect options={stateOptions} label={'State'} value={selectedStates} onChange={handleStatesChange} />
      <AsyncSelect label={'City'} value={selectedCity && [selectedCity]} onChange={handleCityChange} optionsLoader={handleCityInput} defaultOptions={cityOptions} />
      <MultiSelect options={zipCodeOptions} label={'Zip Code'} value={selectedZipCodes} onChange={handleZipCodesChange} disabled={!zipCodeOptions.length} />
      {!!dogBreedOptions.length &&
        <MultiSelect options={dogBreedOptions} label={'Breed'} value={selectedDogBreeds} onChange={handleBreedsChange} />
      }
      <div className="flex gap-2 items-center mt-8">
        <span className="w-1/2 label-text min-w-min whitespace-nowrap font-bold font-lexend text-bodyText">
          Age Min
        </span>
        <AsyncSelect defaultOptions={ageOptions} value={ageMin && [ageMin]} onChange={handleAgeMinChange} />
      </div>
      <div className="flex gap-2 items-center mt-8 mb-4">
        <span className="w-1/2 label-text min-w-min whitespace-nowrap font-bold font-lexend text-bodyText">
          Age Max
        </span>
        <AsyncSelect defaultOptions={ageOptions} value={ageMax && [ageMax]} onChange={handleAgeMaxChange} />
      </div>
    </div>
  )
}

export default Filters;