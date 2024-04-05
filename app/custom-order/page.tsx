{
  /* <div data-tf-live="01HTNABR98Q60CBHAJENEZCH4A"></div><script src="//embed.typeform.com/next/embed.js"></script> */
}

import { SpecialOrder } from '@/components/special-order/special-order';

export default async function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200">
      <main>
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-between gap-12 px-4 md:px-6 lg:flex-row">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <h1 className="text-center text-4xl font-bold text-rose-600 md:text-5xl lg:text-6xl">
                Have a special request?
              </h1>
              <p className=" text-center text-gray-600">
                Fill out the form below and get in touch!
              </p>
              <div className="space-x-4">
                <SpecialOrder />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
