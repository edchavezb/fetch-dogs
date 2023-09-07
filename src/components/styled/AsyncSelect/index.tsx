import { SingleValue } from 'react-select'
import AsyncSelect from 'react-select/async';

export type SelectOption = { value: string, label: string };

interface SelectProps {
  onChange: (newValue: SingleValue<SelectOption>) => void
  optionsLoader?: (inputValue: string) => Promise<SelectOption[]>;
  label?: string
  value?: readonly SelectOption[]
  defaultOptions?: SelectOption[]
}

const StyledAsyncSelect = ({ onChange, optionsLoader, label, value, defaultOptions }: SelectProps) => {

  return (
    <div className="form-control w-full max-w-xs">
      {
        label &&
        <label className="label">
          <span className="label-text font-bold font-lexend text-bodyText">{label}</span>
        </label>
      }
      <AsyncSelect
        loadOptions={optionsLoader}
        defaultOptions={defaultOptions}
        value={value}
        onChange={(option) => onChange(option)}
        getOptionLabel={option => option.label}
        getOptionValue={option => option.value}
        className="basic-select"
        classNames={{
          control: (state) =>
            state.isFocused ? 'bg-background border border-secondary shadow-select' : 'bg-background'
        }}
        classNamePrefix="select"
      />
    </div>
  )
}

export default StyledAsyncSelect;