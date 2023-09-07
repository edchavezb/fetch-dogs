import { useAtom } from 'jotai';
import { userAtom } from '../../core/store/userAtom';
import Button from '../styled/Button';
import StyledLink from '../styled/Link';
import { userLogoutApi } from '../../core/api/auth';

const Nav = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);

  const handleOpenModal = () => {
    const modalElement: HTMLDialogElement | null = document?.getElementById('my_modal_1') as HTMLDialogElement;
    if (modalElement) modalElement.showModal();
  }

  const handleLogout = async () => {
    try {
      await userLogoutApi();
      setStoreUser({
        isLoggedIn: false,
        name: '',
        email: ''
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='h-[70px] flex justify-center shadow-header'>
      <div className='flex justify-between items-center w-full max-w-[1200px] p-4'>
        <div className='font-lexend text-primary text-2xl font-semibold'> &#128021; Fetch Dogs </div>
        <nav className='flex gap-4 items-center'>
          <StyledLink to="/">Search</StyledLink>
          <StyledLink to="/match">Get Matched</StyledLink>
          <Button style={'primary'} onClick={storeUser.isLoggedIn ? handleLogout : handleOpenModal} text={storeUser.isLoggedIn ? 'Log Out' : 'Log In'} />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
