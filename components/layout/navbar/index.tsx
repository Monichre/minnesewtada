import { DogIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { getMenu } from 'lib/shopify';

import Link from 'next/link';
const { COMPANY_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('main-menu');
  console.log('menu: ', menu);

  return (
    <header className="flex h-16 items-center px-4 lg:px-6">
      <Link className="flex items-center" href="#">
        <DogIcon className="h-8 w-8 text-rose-500" />
        <span className="ml-2 text-xl font-bold text-rose-500">{COMPANY_NAME}</span>
      </Link>
      <nav className="ml-auto flex gap-6">
        {menu.length ? (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: any) => (
              <Link
                key={item.title}
                href={item.path}
                className="font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        ) : null}
        {/* <Link className="font-medium text-gray-600 transition-colors hover:text-gray-900" href="#">
          Toys
        </Link>
        <Link className="font-medium text-gray-600 transition-colors hover:text-gray-900" href="#">
          About
        </Link>
        <Link className="font-medium text-gray-600 transition-colors hover:text-gray-900" href="#">
          Contact
        </Link> */}
      </nav>
      <div className="ml-6">
        <Button size="sm">
          <ShoppingCartIcon className="mr-2 h-5 w-5" />
          Cart
        </Button>
      </div>
    </header>
    // <nav className="relative flex items-center justify-between p-4 lg:px-6">
    //   <div className="block flex-none md:hidden">
    //     <Suspense fallback={null}>
    //       <MobileMenu menu={menu} />
    //     </Suspense>
    //   </div>
    //   <div className="flex w-full items-center">
    //     <div className="flex w-full md:w-1/3">
    //       <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
    //         <LogoSquare />
    //         <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
    //           <span className="bg-gradient-to-r from-[#4F46E5] to-[#E114E5] bg-clip-text text-transparent">
    //             {SITE_NAME}
    //           </span>
    //         </div>
    //       </Link>
    // {menu.length ? (
    //   <ul className="hidden gap-6 text-sm md:flex md:items-center">
    //     {menu.map((item: Menu) => (
    //       <li key={item.title}>
    //         <Link
    //           href={item.path}
    //           className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
    //         >
    //           {item.title}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // ) : null}
    //     </div>
    //     <div className="hidden justify-center md:flex md:w-1/3">
    //       <Suspense fallback={<SearchSkeleton />}>
    //         <Search />
    //       </Suspense>
    //     </div>
    //     <div className="flex justify-end md:w-1/3">
    //       <Suspense fallback={<OpenCart />}>
    //         <Cart />
    //       </Suspense>
    //     </div>
    //   </div>
    // </nav>
  );
}
