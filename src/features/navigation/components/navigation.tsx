import { 
  HomeIcon, 
  ExclamationTriangleIcon,
  UserCircleIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export type NavigationItem = {
  name: string;
  href?: string;
  icon: any;
  children?: { name: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Customer Service', href: '/customerService', icon: UserCircleIcon },
  { 
    name: 'Management', 
    icon: CpuChipIcon,
    children: [
      { name: 'Devices', href: '/devices' },
      { name: 'Installations', href: '/installations' },
    ]
  },
  { name: 'Alerts', href: '/alerts', icon: ExclamationTriangleIcon },
];