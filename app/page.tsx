import { Carousel } from '@/components/carousel';
import { Hero } from '@/components/hero/hero';
import { getCollectionProducts } from '@/lib/shopify';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const homepageItems = await getCollectionProducts({
    collection: 'frontpage'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <>
      <Hero products={[firstProduct, secondProduct, thirdProduct]} />
      {/* <ThreeItemGrid
        firstProduct={firstProduct}
        secondProduct={secondProduct}
        thirdProduct={thirdProduct}
      /> */}
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
