"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MountainIcon, UserIcon, ShoppingBagIcon } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Czech Hiking Challenge</span>
        </Link>
        <div className="space-x-4">
          <Link href="/challenges" passHref>
            <Button variant={pathname === '/challenges' ? 'secondary' : 'ghost'}>
              Výzvy
            </Button>
          </Link>
          <Link href="/map" passHref>
            <Button variant={pathname === '/map' ? 'secondary' : 'ghost'}>
              Mapa
            </Button>
          </Link>
          <Link href="/eshop" passHref>
            <Button variant={pathname === '/eshop' ? 'secondary' : 'ghost'}>
              <ShoppingBagIcon className="h-4 w-4 mr-2" />
              E-shop
            </Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant={pathname === '/profile' ? 'secondary' : 'ghost'}>
              <UserIcon className="h-4 w-4 mr-2" />
              Profil
            </Button>
          </Link>
          <Button variant="outline">Přihlásit</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;