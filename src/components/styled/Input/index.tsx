interface InputProps {
  onChange?: () => void
  label?: string
  placeholder?: string
  type?: "text" | "password"
}

const Input = ({ onChange, label, placeholder, type }: InputProps) => {
  return (
    <div className="form-control w-full">
      {
        label &&
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      <input type={type} placeholder={placeholder} className="input w-full bg-background" onChange={onChange} />
    </div>
  )
}

export default Input;