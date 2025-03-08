'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeSwitch from './theme/DarkModeSwitch';

export const Header = () => {
  const path = usePathname();
  const menuItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="h-[80px] w-full flex justify-between items-center">
      <div className="flex items-center text-subcolor dark:text-foreground">
        <Link href="/">
          <span className="mr-3 text-foreground">@JAGO :</span>
        </Link>

        <ul className="flex">
          {menuItems.map(({ href, label }, index) => (
            <li key={href} className="relative">
              <Link href={href} className={`${path.includes(href) ? 'text-pointColor' : ''} hover:text-pointColor`}>
                {label}
              </Link>
              {index < menuItems.length - 1 && <span className="mx-2">/</span>}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </header>
  );
};
