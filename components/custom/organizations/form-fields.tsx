import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.organizations.insert;

const organizationsFields: Omit<FormFields<EntityFormData>, "IdField | OwnerIdField"> = {

    NameField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter name"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    DomainField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="domain">Domain</FormLabel>
                <FormControl>
                  <Input
                    id="domain"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter domain"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    LogoField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="logo">Logo</FormLabel>
                <FormControl>
                  <Input
                    id="logo"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter logo"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CreatedAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="createdAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="createdAt">CreatedAt</FormLabel>
                <FormControl>
                  <Input
                    id="createdAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter createdAt"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    UpdatedAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="updatedAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="updatedAt">UpdatedAt</FormLabel>
                <FormControl>
                  <Input
                    id="updatedAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter updatedAt"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaxUsersField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="maxUsers"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="maxUsers">MaxUsers</FormLabel>
                <FormControl>
                  <Input
                    id="maxUsers"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter maxUsers"
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
  NameField,
  DomainField,
  LogoField,
  CreatedAtField,
  UpdatedAtField,
  MaxUsersField,
  EnableRLSField,
} = organizationsFields;