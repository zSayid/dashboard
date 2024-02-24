import React from 'react'; // Import React from the 'react' library
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'; // Import the necessary icons from '@heroicons/react/24/outline'
import Link from 'next/link'; // Import Link component from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// ...

// Define the NavLinks component
export default function NavLinks() {
    const pathname = usePathname();
  // Assume that 'links' is defined elsewhere in your code
  const links = [
    { name: 'Users', href: '/users', icon: UserGroupIcon }, // Assuming 'UserGroupIcon' is the correct icon for users
    { name: 'Home', href: '/', icon: HomeIcon }, // Assuming 'HomeIcon' is the correct icon for home
    { name: 'Duplicate', href: '/duplicate', icon: DocumentDuplicateIcon } // Assuming 'DocumentDuplicateIcon' is the correct icon for duplication
  ];

  return (
    <>
      {/* Map over the 'links' array and create a Link component for each */}
      {links.map((link) => {
        const LinkIcon = link.icon; // Extract the icon component from the link object
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
          >
            <LinkIcon className="w-6" /> {/* Render the icon component */}
            <p className="hidden md:block">{link.name}</p> {/* Render the link name */}
          </Link>
        );
      })}
    </>
  );
}
