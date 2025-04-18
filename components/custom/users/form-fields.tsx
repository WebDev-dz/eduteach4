import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EntityFormData = typeof defaultValues.users.insert;

const usersFields: Omit<FormFields<EntityFormData>, "IdField | StripeCustomerIdField | OrganizationIdField"> = {

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

    EmailField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter email"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EmailVerifiedField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="emailVerified"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="emailVerified">EmailVerified</FormLabel>
                <FormControl>
                  <Input
                    id="emailVerified"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter emailVerified"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ImageField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="image">Image</FormLabel>
                <FormControl>
                  <Input
                    id="image"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter image"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    FirstNameField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="firstName">FirstName</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter firstName"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    LastNameField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="lastName">LastName</FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter lastName"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    PasswordHashField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="passwordHash"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="passwordHash">PasswordHash</FormLabel>
                <FormControl>
                  <Input
                    id="passwordHash"
                    type="password"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter passwordHash"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    RoleField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="role">Role</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="teacher">Teacher</SelectItem>
                      
            <SelectItem value="admin">Admin</SelectItem>
                      
            <SelectItem value="department_head">Department Head</SelectItem>
                      
            <SelectItem value="school_admin">School Admin</SelectItem>
                    </SelectContent>
                  </Select>
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

    LastLoginAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="lastLoginAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="lastLoginAt">LastLoginAt</FormLabel>
                <FormControl>
                  <Input
                    id="lastLoginAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter lastLoginAt"
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
  EmailField,
  EmailVerifiedField,
  ImageField,
  FirstNameField,
  LastNameField,
  PasswordHashField,
  RoleField,
  CreatedAtField,
  UpdatedAtField,
  LastLoginAtField,
  EnableRLSField,
} = usersFields;