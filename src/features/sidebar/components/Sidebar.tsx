'use client';

import { Fragment, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/features/navigation/components/navigation'; 
import { cn } from '@/lib/utils';
import { UserMenu } from '@/features/userMenu/components/UserMenu';

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const renderNavItem = (item: any) => {
    const isCurrent = item.href ? pathname === item.href : false;
    const isChildCurrent = item.children?.some((child: any) => pathname === child.href);

    if (!item.children) {
      return (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            isCurrent ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
          )}
        >
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {item.name}
        </Link>
      );
    }

    return (
      <Disclosure as="div" key={item.name} defaultOpen={isChildCurrent}>
        {({ open }) => (
          <>
            <DisclosureButton
              className={cn(
                isChildCurrent ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6'
              )}
            >
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              {item.name}
              <ChevronRightIcon
                className={cn(
                  open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                  'ml-auto h-5 w-5 shrink-0 transition-transform duration-200'
                )}
              />
            </DisclosureButton>
            <DisclosurePanel as="ul" className="mt-1 px-2">
              {item.children.map((subItem: any) => (
                <li key={subItem.name}>
                  <Link
                    href={subItem.href}
                    className={cn(
                      pathname === subItem.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'block rounded-md py-2 pr-2 pl-9 text-sm leading-6'
                    )}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  };

  return (
    <div>
      {/* MOBILE DRAWER (Slide-over) */}
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img className="h-8 w-auto" src="/favicon144.png" alt="Kamstrup" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map(renderNavItem)}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* DESKTOP SIDEBAR (Static) */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-8 w-auto" src="/favicon144.png" alt="Kamstrup" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map(renderNavItem)}
                </ul>
              </li>
              <li className="mt-auto">
                <Link href="settings" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          
          {/* Top Header Content (Profile dropdown, etc.) goes here */}
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
             <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
                <UserMenu />
             </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}