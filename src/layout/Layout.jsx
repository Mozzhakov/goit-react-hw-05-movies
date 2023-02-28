import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Suspense } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={Loading.pulse()}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
