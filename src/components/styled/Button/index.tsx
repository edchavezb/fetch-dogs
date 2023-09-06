interface ButtonProps {
  onClick?: () => void
  children?: string
  style: string
} 

const Button = ({style, children, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={style === 'primary' ? 'btn bg-primary hover:bg-secondary hover:border-transparent text-white font-lexend' : 'btn bg-tertiary hover:border-transparent text-primary font-lexend'}>{children}</button>
  )
}

export default Button;