import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.verificationTokens.insert;

const verificationTokensFields: FormFields<EntityFormData> = {

    IdentifierField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="identifier">Identifier</FormLabel>
                <FormControl>
                  <Input
                    id="identifier"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter identifier"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    TokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="token"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="token">Token</FormLabel>
                <FormControl>
                  <Input
                    id="token"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter token"
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
  IdentifierField,
  TokenField,
  ExpiresField,
  EnableRLSField,
} = verificationTokensFields;