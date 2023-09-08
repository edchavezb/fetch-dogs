import { useAtom } from 'jotai';
import { userAtom } from '../../core/store/userAtom';
import Button from '../styled/Button/Button';
import StyledLink from '../styled/Link/Link';
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
        <div className='font-lexend text-primary text-2xl font-semibold whitespace-nowrap'> &#128021; Fetch Dogs </div>
        <div className="drawer block lg:hidden z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end align-center">
            <label htmlFor="my-drawer" >
            <div className='w-7 h-7'>
              <img className='w-full' src="/reorder.svg" alt="menu"></img>
            </div>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="menu flex p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className='flex flex-col h-[100vh] gap-4 justify-center items-center'>
                <StyledLink to="/">Search</StyledLink>
                <StyledLink to="/match">Get Matched</StyledLink>
                <Button style={'primary'} onClick={storeUser.isLoggedIn ? handleLogout : handleOpenModal} text={storeUser.isLoggedIn ? 'Log Out' : 'Log In'} />
              </div>
            </div>
          </div>
        </div>
        <nav className='gap-4 items-center hidden lg:flex'>
          <StyledLink to="/">Search</StyledLink>
          <StyledLink to="/match">Get Matched</StyledLink>
          <Button style={'primary'} onClick={storeUser.isLoggedIn ? handleLogout : handleOpenModal} text={storeUser.isLoggedIn ? 'Log Out' : 'Log In'} />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
