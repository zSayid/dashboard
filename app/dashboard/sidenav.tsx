// components/SideNavbar.js
import React from 'react';
import Link from 'next/link';
import { HomeIcon, DocumentTextIcon, UsersIcon, PowerIcon } from '@heroicons/react/24/outline'

const SideNavbar = () => {
  return (
    <>
      <div className="bg-gray-200 h-full w-48 top-0 left-0 p-4 ">
        <Link href="/">
          <div className="flex items-center cursor-pointer py-2 px-4 text-gray-800 hover:bg-gray-300">
            <HomeIcon className="w-6 h-6 mr-2" /> {/* Using HomeIcon */}
            Home
          </div>
        </Link>
        <Link href="/dashboard/invoices">
          <div className="flex items-center cursor-pointer py-2 px-4 text-gray-800 hover:bg-gray-300">
            <DocumentTextIcon className="w-6 h-6 mr-2" /> {/* Using DocumentTextIcon */}
            Invoices
          </div>
        </Link>
        <Link href="/dashboard/customers">
          <div className="flex items-center cursor-pointer py-2 px-4 text-gray-800 hover:bg-gray-300">
            <UsersIcon className="w-6 h-6 mr-2" /> {/* Using UsersIcon */}
            Customers
          </div>
        </Link>
        <div className=" flex mt-auto cursor-pointer py-2 px-4 text-gray-800 hover:bg-gray-300  rounded-lg border-2 border-gray-300">
          <PowerIcon className="h-6 mb-2 mr-2" />
          Sign out
        </div>
      </div>



    </>

  );
};

export default SideNavbar;
