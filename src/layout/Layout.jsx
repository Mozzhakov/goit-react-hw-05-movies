import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Suspense } from 'react';

export const Layout = () => {
  <div>
    <Header />
    <main>
      <Suspense fallback={'loading'}>
        <Outlet />
      </Suspense>
    </main>
  </div>;
};
