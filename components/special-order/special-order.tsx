'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ShippingAddress {
  address1: string;
  address2: string;
  city: string;
  provinceCode: string;
  zip: string;
}
interface CustomRequest {
  address: ShippingAddress;
  phone: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  description: string;
  size: string;
}

const formSchema = z.object({
  email: z.string(),
  size: z.string(),
  title: z.string(),
  description: z.string(),
  address1: z.string().min(1, {
    message: 'Address1 must be at least 1 character.'
  }),
  address2: z.string().min(1, {
    message: 'Address2 must be at least 1 character.'
  }),
  city: z.string().min(1, {
    message: 'City must be at least 1 character.'
  }),

  firstName: z.string().min(1, {
    message: 'First name must be at least 1 character.'
  }),
  lastName: z.string().min(1, {
    message: 'Last name must be at least 1 character.'
  }),
  phone: z.string().length(10, {
    message: 'Phone number must be exactly 10 digits.'
  }),
  provinceCode: z.string().min(2, {
    message: 'Province code must be at least 2 characters.'
  }),
  zip: z.string().min(5, {
    message: 'Zip code must be at least 5 characters.'
  })
});

export const SpecialOrder = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  // 2. Define a submit handler.
  const onSubmit = (data: any) => {
    const { address1, address2, city, provinceCode, zip, ...rest } = data;
    fetch('/api/special-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          ...rest,
          address: {
            address1,
            address2,
            city,
            provinceCode,
            zip
          }
        }
      })
    }).then((res) => {
      console.log('res: ', res);
    });

    toast('Thank you for submitting your special request. We will be in touch shortly!');
    router.push('/');
  };
  return (
    <div className="mx-auto max-w-xl rounded-md border bg-white p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Name your creation</FormLabel>
                <FormControl>
                  <Input id="title" placeholder="My Fuzzy Wuzzy" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea id="description" placeholder="The cutest of wuzzies" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                    <SelectItem value="extra-large">Extra Large</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input id="phone" placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input id="email" placeholder="Enter your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Textarea id="firstName" placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Textarea id="lastName" placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Address 1</FormLabel>
                <FormControl>
                  <Textarea id="address1" placeholder="Enter your address line 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Address 2</FormLabel>
                <FormControl>
                  <Textarea id="address2" placeholder="Enter your address line 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Textarea id="city" placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="provinceCode"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Province Code</FormLabel>
                <FormControl>
                  <Textarea id="provinceCode" placeholder="Enter your province code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Textarea id="zip" placeholder="Enter your zip code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="ml-auto mt-8 block bg-rose-500 hover:bg-rose-600"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
