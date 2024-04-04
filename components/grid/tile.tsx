import Image from 'next/image';
import Label from '../label';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-4">
        <Image {...props} className="aspect-square rounded-lg object-cover object-center" />
        {label ? (
          <Label
            title={label.title}
            amount={label.amount}
            currencyCode={label.currencyCode}
            position={label.position}
          />
        ) : null}
        {/* <h3 className="mt-4 text-xl font-semibold text-gray-800">
        Chocolate Chip Cookie
      </h3>
      <p className="mt-2 text-gray-600">
        A sweet and cuddly treat that'll melt your heart.
      </p> */}
        <Button className="mt-4 bg-rose-500 hover:bg-rose-600" size="sm">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}
