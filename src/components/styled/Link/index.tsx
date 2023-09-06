import { Link } from "react-router-dom";

interface LinkProps {
  to: string
  children?: string
}

const StyledLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} className={'font-lexend text-bodyText hover:text-secondary'}>{children}</Link>
  )
}

export default StyledLink;