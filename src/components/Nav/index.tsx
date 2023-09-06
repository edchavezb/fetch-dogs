import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='h-[70px] flex justify-center shadow-header'>
      <div className='flex justify-between items-center w-full max-w-[1280px] p-4'>
        <div className='font-lexend text-primary text-2xl'> Fetch Dogs </div>
        <nav className='flex gap-4'>
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <div>Sign Out</div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
