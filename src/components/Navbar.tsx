'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center gap-8">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Masanne
        </Link>
        <ul className="flex gap-6 ml-auto">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative py-2 ${
                  pathname === href ? 'text-indigo-600' : ''
                }`}
              >
                {label}
                {pathname === href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 inset-x-0 h-px bg-indigo-600"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
