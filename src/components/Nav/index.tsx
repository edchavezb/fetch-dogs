import { Link } from 'react-router-dom';

const Nav = () => {

  const handleOpenModal = () => {
    const modalElement: HTMLDialogElement | null = document?.getElementById('my_modal_1') as HTMLDialogElement;
    if (modalElement) modalElement.showModal();
  }

  return (
    <div className='h-[70px] flex justify-center shadow-header'>
      <div className='flex justify-between items-center w-full max-w-[1280px] p-4'>
        <div className='font-lexend text-primary text-2xl'> Fetch Dogs </div>
        <nav className='flex gap-4'>
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <div onClick={handleOpenModal}>Sign In</div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
