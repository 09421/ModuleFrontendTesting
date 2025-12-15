import { Sidebar } from '@/features/sidebar/components/Sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Sidebar>
            {children}
        </Sidebar>
      </body>
    </html>
  );
}