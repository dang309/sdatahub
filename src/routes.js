import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';

import User from './pages/TaskMonitoring';
import NotFound from './pages/Page404';

import { FAKE_NAME, FAKE_PASSWORD } from './utils/constants';

// ----------------------------------------------------------------------

export default function Router() {
  const auth = localStorage.getItem('username:password') || '';
  let isAuth;
  if (auth.length) {
    const [username, password] = auth.split(':');
    isAuth = Boolean(username === FAKE_NAME && password === FAKE_PASSWORD);
  }
  return useRoutes([
    {
      path: '/dashboard',
      element: isAuth ? <DashboardLayout /> : <Navigate to="/login" replace />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'task-monitoring', element: <User /> },
        { path: '', element: null }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
