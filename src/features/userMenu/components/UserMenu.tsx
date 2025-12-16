import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';

export const UserMenu = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="h-6 w-6" />
      </button>

      <Menu as="div" className="relative ml-3">
        <MenuButton 
          className="relative ml-3 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <UserCircleIcon aria-hidden="true" className="h-6 w-6" />
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {['Support', 'Sign out'].map((item) => (
              <MenuItem key={item}>
                {({ focus }) => (
                  <Link
                    href="#"
                    className={focus ? 'bg-gray-100 block px-4 py-2 text-sm text-gray-700' : 'block px-4 py-2 text-sm text-gray-700'}
                  >
                    {item}
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};