import Link from 'next/link';
import { DogIcon } from '../icons';

const { COMPANY_NAME } = process.env;

export default async function Footer() {
  return (
    <footer className="bg-rose-500 py-8 text-white">
      <div className="container flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <div className="mb-4 flex items-center md:mb-0">
          <DogIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">{COMPANY_NAME}</span>
        </div>
        <nav className="flex space-x-4">
          <Link className="transition-colors hover:text-rose-300" href="#">
            Home
          </Link>
          <Link className="transition-colors hover:text-rose-300" href="#">
            Toys
          </Link>
          <Link className="transition-colors hover:text-rose-300" href="#">
            About
          </Link>
          <Link className="transition-colors hover:text-rose-300" href="#">
            Contact
          </Link>
        </nav>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">© 2024 {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
