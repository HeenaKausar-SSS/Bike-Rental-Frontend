import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AdminHeader from './AdminHeader'//sidebar
import AdminFooter from './AdminFooter'


const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/admin/admin-register' || location.pathname === '/admin/admin-login';

  return (
    <>
    {!isAuthPage && <AdminHeader />}
    {/* <div className={!isAuthPage ? 'main-content' : 'auth-content'}> */}
        <Outlet />
    {!isAuthPage && <AdminFooter />}
      {/* </div> */}
    </>
  )
}

export default Layout