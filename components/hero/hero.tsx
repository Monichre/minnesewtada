'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';

// Render a YouTube video player

export const Hero = ({ products }: { products: any[] }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200">
      <main>
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-between gap-12 px-4 md:px-6 lg:flex-row">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold text-rose-600 md:text-5xl lg:text-6xl">
                Cuddly Companions, Handmade with Love
              </h1>
              <p className="max-w-xl text-gray-600">
                Discover our delightful collection of custom-made stuffed toys, each one a unique
                creation crafted with care and imagination. From whimsical animals to sweet treats,
                we bring your wildest plush dreams to life.
              </p>
              <div className="space-x-4">
                <Button className="bg-rose-500 hover:bg-rose-600" size="lg">
                  <Link href="/search/all">Shop Now</Link>
                </Button>
                <Button
                  className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/about-us">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <Card className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-white/20 !p-0 backdrop-blur-sm">
                <CardContent className="flex h-full flex-col items-center justify-center !p-0">
                  <div className="video-wrapper">
                    <ReactPlayer
                      url="/animals.mp4"
                      width="100%"
                      height="100%"
                      className="react-player"
                    />
                  </div>
                  {/* <Image
                    alt="Toy 1"
                    className="aspect-square rounded-full object-cover object-center shadow-lg"
                    height="200"
                    src="/animals-4.jpg"
                    width="200"
                  />
                  <Image
                    alt="Toy 2"
                    className="aspect-square rounded-full object-cover object-center shadow-lg"
                    height="150"
                    src="/animals-2.jpg"
                    width="150"
                  /> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold text-rose-600 md:text-4xl">Featured Toys</h2>
              <p className="max-w-xl text-gray-600">
                Check out our latest and most popular stuffed toy creations, each one a unique and
                lovable companion waiting to be discovered.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.handle}>
                  <CardContent className="flex flex-col items-center p-4">
                    <Image
                      alt="Toy"
                      className="aspect-square rounded-lg object-cover object-center"
                      height="200"
                      src={product.featuredImage?.url}
                      width="200"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">{product?.title}</h3>
                    <p className="mt-2 text-gray-600">{product?.description}</p>
                    <Button className="mt-4 bg-rose-500 hover:bg-rose-600" size="sm">
                      <Link href={`/product/${product.handle}`}>Buy Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-rose-600 md:text-4xl">
                  About Stuffed with Love
                </h2>
                <p className="max-w-xl text-gray-600">
                  At Stuffed with Love, we believe that every child deserves a special friend to
                  cuddle and cherish. That's why we handcraft each of our adorable stuffed toys with
                  the utmost care and attention to detail, using only the highest quality materials.
                </p>
                <p className="max-w-xl text-gray-600">
                  Our mission is to spread joy and happiness through our imaginative creations,
                  while also promoting sustainable practices and giving back to our community. When
                  you purchase one of our plush companions, you're not just getting a toy – you're
                  getting a piece of love and magic.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  alt="About"
                  className="aspect-square rounded-lg object-cover object-center shadow-lg"
                  height="500"
                  src="/animals-4.jpg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200 py-12 md:py-16 lg:py-24">
          <div className="container flex flex-col items-center justify-between gap-12 px-4 md:px-6 lg:flex-row">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <h2 className="text-3xl font-bold text-rose-600 md:text-4xl">Special Offer</h2>
              <p className="max-w-xl text-gray-600">
                Treat yourself or a loved one to a delightful surprise! For a limited time, get 20%
                off when you purchase two or more stuffed toys from our collection.
              </p>
              <Button className="bg-rose-500 hover:bg-rose-600" size="lg">
                Shop Now
              </Button>
            </div>
            <div className="flex flex-1 justify-center">
              <Image
                alt="Special Offer"
                className="aspect-square rounded-full object-cover object-center shadow-lg"
                height="400"
                src="/animals-1.jpg"
                width="400"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
