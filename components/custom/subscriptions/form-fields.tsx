import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EntityFormData = typeof defaultValues.subscriptions.insert;

const subscriptionsFields: Omit<FormFields<EntityFormData>, "IdField | UserIdField | OrganizationIdField | StripeCustomerIdField | StripeSubscriptionIdField"> = {

    PlanField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="plan">Plan</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="plan">
                      <SelectValue placeholder="Select plan" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="starter">Starter</SelectItem>
                      
            <SelectItem value="professional">Professional</SelectItem>
                      
            <SelectItem value="school">School</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    StatusField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="status">Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="active">Active</SelectItem>
                      
            <SelectItem value="canceled">Canceled</SelectItem>
                      
            <SelectItem value="incomplete">Incomplete</SelectItem>
                      
            <SelectItem value="incomplete_expired">Incomplete Expired</SelectItem>
                      
            <SelectItem value="past_due">Past Due</SelectItem>
                      
            <SelectItem value="trialing">Trialing</SelectItem>
                      
            <SelectItem value="unpaid">Unpaid</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CurrentPeriodStartField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="currentPeriodStart"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="currentPeriodStart">CurrentPeriodStart</FormLabel>
                <FormControl>
                  <Input
                    id="currentPeriodStart"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter currentPeriodStart"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CurrentPeriodEndField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="currentPeriodEnd"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="currentPeriodEnd">CurrentPeriodEnd</FormLabel>
                <FormControl>
                  <Input
                    id="currentPeriodEnd"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter currentPeriodEnd"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CancelAtPeriodEndField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="cancelAtPeriodEnd"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="cancelAtPeriodEnd"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="cancelAtPeriodEnd">CancelAtPeriodEnd</FormLabel>
                </div>
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
  PlanField,
  StatusField,
  CurrentPeriodStartField,
  CurrentPeriodEndField,
  CancelAtPeriodEndField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = subscriptionsFields;