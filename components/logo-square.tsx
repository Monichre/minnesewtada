import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded bg-gradient-to-r from-[#fff] to-[#eee] p-4 dark:border-neutral-700 dark:bg-black ',
        {
          'h-[100px] w-[100px]': !size,
          'h-[80px] w-[80px]': size === 'sm'
        }
      )}
    >
      <Image
        alt="logo"
        src={'/logo.png'}
        priority
        height={100}
        width={100}

        // className={clsx({
        //   'h-[100px] w-[100px]': !size,
        //   'h-[100px] w-[100px]': size === 'sm'
        // })}
      />
    </div>
  );
}
