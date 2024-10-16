import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

interface MenuItemProps {
  key: string;
  icon: string;
  title: string;
  path: string;
}

const ListMenu = [
  {
    key: 'Dashboard',
    icon: 'bx bxs-dashboard',
    title: 'Dashboard',
    path: '/admin',
  },
  {
    key: 'Product',
    icon: 'bx bxs-package',
    title: 'Product Management',
    path: '/admin/product',
  },
  {
    key: 'Customer',
    icon: 'bx bxs-user',
    title: 'Customer Management',
    path: '/admin/customer',
  },
  {
    key: 'Order',
    icon: 'bx bxs-cart',
    title: 'Order Management',
    path: '/admin/order',
  },
  {
    key: 'Blog',
    icon: 'bx bxs-news',
    title: 'Blog Management',
    path: '/admin/blog',
  },
  {
    key: 'Voucher',
    icon: 'bx bxs-news',
    title: 'Voucher Management',
    path: '/admin/voucher',
  },
  {
    key: 'Setting',
    icon: 'bx bxs-cog',
    title: 'Setting Management',
    path: '/admin/setting',
  }
] as MenuItemProps[];

const AdminLayout = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('Dashboard');
  return (
    <div className="relative">
      <div className='flex flex-row space-x-5'>
        <div className='w-1/6 h-full border flex flex-col space-y-3'>
          <h1 className='text-center text-h1 font-extra font-bold'>ABC TEASHOP</h1>
          {ListMenu.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex flex-row items-center space-x-5 p-2 ${location.pathname === item.path ? 'border bg-lightBlack text-white' : ''
                }`}
              onClick={() => setCurrentPage(item.title)}
              >
              <i className={`${item.icon} text-h3`}></i>
              <span className='text-normal'>{item.key}</span>
            </Link>
          ))}
          <div className='mt-auto mx-5 flex flex-row justify-between items-center'>

          </div>
        </div>
        <div className='w-5/6 h-full flex flex-col pr-5'>
          <div className='flex flex-row items-center justify-between pt-5'>
            <h1 className='text-h2 font-bold'>{currentPage}</h1>
            <div className='flex flex-row space-x-6'>
              <input className='w-96 h-10 rounded-[10px] p-1 outline-none border' placeholder='search...' />
              <button>
                <i className='bx bx-bell text-h2' ></i>
              </button>
              <div className='flex flex-row items-center space-x-5'>
                <div className='w-10 h-10 rounded-[50%] bg-gray'></div>
                <div className='flex flex-col'>
                  <span className='text-normal'>Name</span>
                  <span className='text-normal'>Role</span>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default AdminLayout;