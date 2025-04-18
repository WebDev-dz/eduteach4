import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.classStudents.insert;

const classStudentsFields: Omit<FormFields<EntityFormData>, "ClassIdField | StudentIdField"> = {

    EnrollmentDateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="enrollmentDate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="enrollmentDate">EnrollmentDate</FormLabel>
                <FormControl>
                  <Input
                    id="enrollmentDate"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter enrollmentDate"
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
  EnrollmentDateField,
  EnableRLSField,
} = classStudentsFields;