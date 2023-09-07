interface ButtonProps {
  onClick?: () => void
  text?: string
  style: string
} 

const Button = ({style, text, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={style === 'primary' ? 'btn bg-primary hover:bg-secondary hover:border-transparent text-white font-lexend normal-case' : 'btn bg-tertiary hover:border-transparent text-primary font-lexend normal-case'}>
      {text}
    </button>
  )
}

export default Button;