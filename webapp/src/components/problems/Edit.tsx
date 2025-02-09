import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

type EditProps = {
  editing?: 'title' | 'body' | null;
  title: string;
  mutation: (title?: string) => void;
};

const formSchema = z.object({
  inputTitle: z
    .string()
    .min(20, {
      message: 'Problem statement SHOULD be at least 20 characters.',
    })
    .max(140, { message: 'Problem statement MUST NOT exceeed 140 characters' }),
});

export default function Edit({ editing, title, mutation }: EditProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputTitle: title,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation(values.inputTitle);
    console.log(values);
  }
  if (editing === 'title') {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="inputTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem Title</FormLabel>
                <FormControl>
                  <div className="flex flex-nowrap">
                    <Input placeholder="problem:" {...field} />
                    <Button variant="outline">Save</Button>
                  </div>
                </FormControl>
                <FormDescription>
                  This is the title of the problem, think of it as a TLDR.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }
}
