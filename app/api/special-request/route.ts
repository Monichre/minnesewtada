import { createSpecialOrder } from '@/lib/shopify';

export async function POST(request: Request) {
  const res = await request.json();
  console.log('res: ', res);
  const data = await createSpecialOrder({ data: res?.data });
  console.log('data: ', data);
  return Response.json({ res });
}
