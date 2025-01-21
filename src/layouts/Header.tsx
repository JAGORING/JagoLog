'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const path = usePathname();
  const menuItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="h-[60px] flex items-center">
      <div className="w-full flex justify-between text-gray-200">
        <div className="flex items-center">
          <span className="mr-3">@JAGO :</span>
          <ul className="flex">
            {menuItems.map(({ href, label }, index) => (
              <li key={href} className="relative">
                <Link href={href} className={`${path === href ? 'text-white' : ''} hover:text-white`}>
                  {label}
                </Link>
                {index < menuItems.length - 1 && <span className="mx-2 text-gray-200">/</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>Hello!</div>
      </div>
    </header>
  );
};
