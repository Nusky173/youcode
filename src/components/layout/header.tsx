import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { Button } from '../ui/button';
import LoggedInButton from '@/features/auth/LoggedInButton';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
            <Image src="/img/logo.svg" width={50} height={32} alt="app logo"></Image>
            <Typography variant="h3" as={Link} href="/">
                {SiteConfig.title}
            </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <LoggedInButton></LoggedInButton>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}