import { ReactNode } from 'react';
import Nav from '../Nav';
import Modal from '../LoginModal';
import Sidebar from '../Sidebar';
import { useAtom } from 'jotai';
import { userAtom } from '../../core/store/userAtom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [storeUser, setStoreUser] = useAtom(userAtom);

  return (
    <div className='w-full'>
      <Modal/>
      <Nav />
      <div className='flex justify-center h-[calc(100vh-70px)] bg-background overflow-y-scroll py-10 px-6 lg:px-0'>
        <div className='flex lg:flex-row flex-col w-full h-min max-w-[1200px] gap-6'>
          <div className={storeUser.isLoggedIn ? 'lg:w-1/4 w-full' : 'hidden'}>
            <Sidebar/>
          </div>
          <main className='w-full h-full flex justify-center items-center'>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
