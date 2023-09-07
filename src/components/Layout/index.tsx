import { ReactNode } from 'react';
import Nav from '../Nav';
import Modal from '../LoginModal';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full'>
      <Modal/>
      <Nav />
      <div className='flex justify-center h-[calc(100vh-70px)] bg-background overflow-y-scroll py-10'>
        <div className='flex w-full h-min max-w-[1280px] gap-6'>
          <div className='w-1/4'>
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
