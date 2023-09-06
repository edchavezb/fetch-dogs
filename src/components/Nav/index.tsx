import Button from '../styled/Button';
import StyledLink from '../styled/Link';

const Nav = () => {

  const handleOpenModal = () => {
    const modalElement: HTMLDialogElement | null = document?.getElementById('my_modal_1') as HTMLDialogElement;
    if (modalElement) modalElement.showModal();
  }

  return (
    <div className='h-[70px] flex justify-center shadow-header'>
      <div className='flex justify-between items-center w-full max-w-[1280px] p-4'>
        <div className='font-lexend text-primary text-2xl font-semibold'> Fetch Dogs </div>
        <nav className='flex gap-4 items-center'>
          <StyledLink to="/">Search</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
          <Button style={'primary'} onClick={handleOpenModal}> Sign In</Button>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
