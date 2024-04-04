'use server';

import { zodResolver } from '@hookform/resolvers/zod';
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
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.'
  }),
  size: z.string().min(5, {
    message: 'Size must be at least 5.'
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.'
  }),
  phone: z.string().length(10, {
    message: 'Phone number must be exactly 10 digits.'
  }),
  address: z.string().min(5, {
    message: 'Address must be at least 5 characters.'
  })
});

export const SpecialOrder = ({ submit }: any) => {
  // bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200 py-12 md:py-16 lg:py-24
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: any) => {
    const fields = Object.keys(data).map((key: any) => {
      return {
        key,
        value: data[key]
      };
    });

    await submit(fields);

    toast({
      title: 'Success!',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          Thank you for submitting your special request. We will be in touch shortly!
        </pre>
      )
    });
  };
  return (
    <div className="mx-auto max-w-xl rounded-md border bg-white p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input id="name" placeholder="My Fuzzy Wuzzy" {...field} />
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
          {/* <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="color">
            Color
          </label>
          <Select>
            <SelectTrigger id="color">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="green">Green</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
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
            name="address"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea id="address" placeholder="Enter your address" {...field} />
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
