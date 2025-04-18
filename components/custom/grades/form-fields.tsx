import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.grades.insert;

const gradesFields: Omit<FormFields<EntityFormData>, "IdField | StudentIdField | ClassIdField | AssignmentIdField | TeacherIdField"> = {

    ScoreField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="score"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="score">Score</FormLabel>
                <FormControl>
                  <Input
                    id="score"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter score"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaxScoreField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="maxScore"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="maxScore">MaxScore</FormLabel>
                <FormControl>
                  <Input
                    id="maxScore"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter maxScore"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CommentsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="comments">Comments</FormLabel>
                <FormControl>
                  <Input
                    id="comments"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter comments"
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
  ScoreField,
  MaxScoreField,
  CommentsField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = gradesFields;