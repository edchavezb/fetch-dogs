import Select, { MultiValue } from 'react-select'

export type SelectOption = { value: string, label: string };

interface SelectProps {
  onChange: (newValue: MultiValue<SelectOption>) => void
  label?: string
  value: readonly SelectOption[]
  options: SelectOption[]
  disabled?: boolean
}

const MultiSelect = ({ onChange, label, value, options, disabled }: SelectProps) => {

  return (
    <div className="form-control w-full">
      {
        label &&
        <label className="label">
          <span className="label-text font-bold font-lexend text-bodyText">{label}</span>
        </label>
      }
      <Select
        isMulti
        isDisabled={disabled}
        value={value}
        options={options}
        onChange={(option) => onChange(option)}
        getOptionLabel={option => option.label}
        getOptionValue={option => option.value}
        className="basic-multi-select"
        classNames={{
          control: (state) =>
            state.isFocused ? 'bg-background border border-secondary shadow-select' : 'bg-background',
            menuList: state => state.options ? 'focus:bg-red' : ''
        }}
        classNamePrefix="select"
      />
    </div>
  )
}

export default MultiSelect;