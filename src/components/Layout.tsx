import { Outlet } from 'react-router';

import ThemeToggle from './ThemeToggle';
const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <ThemeToggle />
      <Outlet />
    </div>
  );
};

export default Layout;
