'use client'

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isDashboardPage = pathname === '/dashboard'; // Adjust this path as needed

  if (isDashboardPage) {
    return null;
  }

  return <Header />;
}