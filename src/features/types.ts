export type NavigationItem = {
  name: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Customer Service', href: '/service' },
  { name: 'Device Management', href: '/devices' },
  { name: 'Installation Management', href: '/installations' },
  { name: 'Alerts', href: '/alerts' },
  { name: 'Settings', href: '/settings' },
];