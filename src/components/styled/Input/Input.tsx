interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  value?: string
  type?: "text" | "password" | "email"
}

const Input = ({ onChange, label, placeholder, value, type }: InputProps) => {
  return (
    <div className="form-control w-full">
      {
        label &&
        <label className="label">
          <span className="label-text font-bold font-lexend text-bodyText">{label}</span>
        </label>
      }
      <input type={type} placeholder={placeholder} className="input w-full bg-background" onChange={onChange} value={value} />
    </div>
  )
}

export default Input;