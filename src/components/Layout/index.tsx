import { ReactNode } from 'react';
import Nav from '../Nav';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full'>
      <Nav />
      <div className='flex justify-center h-[calc(100vh-70px)] bg-background'>
        <div className='flex w-full max-w-[1280px]'>
          <div className='w-56 py-10'>
            <div className='h-full rounded-md border'>
              This is sidebar
            </div>
          </div>
          <main className='w-full h-full flex justify-center items-center py-10'>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
