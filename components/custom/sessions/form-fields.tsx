import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.sessions.insert;

const sessionsFields: Omit<FormFields<EntityFormData>, "IdField | UserIdField"> = {

    SessionTokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="sessionToken"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="sessionToken">SessionToken</FormLabel>
                <FormControl>
                  <Input
                    id="sessionToken"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter sessionToken"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ExpiresField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="expires"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="expires">Expires</FormLabel>
                <FormControl>
                  <Input
                    id="expires"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter expires"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EnableRLSField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="enableRLS"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="enableRLS">EnableRLS</FormLabel>
                <FormControl>
                  <Input
                    id="enableRLS"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter enableRLS"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },
};

// Export all individual fields for direct imports
export const {
  SessionTokenField,
  ExpiresField,
  EnableRLSField,
} = sessionsFields;