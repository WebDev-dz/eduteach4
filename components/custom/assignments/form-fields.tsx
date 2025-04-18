import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EntityFormData = typeof defaultValues.assignments.insert;

const assignmentsFields: Omit<FormFields<EntityFormData>, "IdField | ClassIdField | TeacherIdField"> = {

    TitleField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter title"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    TypeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="type">Type</FormLabel>
                <FormControl>
                  <Input
                    id="type"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter type"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    DueDateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="dueDate">DueDate</FormLabel>
                <FormControl>
                  <Input
                    id="dueDate"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter dueDate"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    TotalPointsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="totalPoints"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="totalPoints">TotalPoints</FormLabel>
                <FormControl>
                  <Input
                    id="totalPoints"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter totalPoints"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EstimatedTimeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="estimatedTime"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="estimatedTime">EstimatedTime</FormLabel>
                <FormControl>
                  <Input
                    id="estimatedTime"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter estimatedTime"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    InstructionsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="instructions">Instructions</FormLabel>
                <FormControl>
                  <Input
                    id="instructions"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter instructions"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AllowLateSubmissionsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="allowLateSubmissions"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="allowLateSubmissions"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="allowLateSubmissions">AllowLateSubmissions</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    TimeLimitField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="timeLimit"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="timeLimit">TimeLimit</FormLabel>
                <FormControl>
                  <Input
                    id="timeLimit"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter timeLimit"
                  />
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
                      
            <SelectItem value="draft">Draft</SelectItem>
                      
            <SelectItem value="published">Published</SelectItem>
                      
            <SelectItem value="graded">Graded</SelectItem>
                      
            <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ResourcesField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="resources"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="resources">Resources</FormLabel>
                <FormControl>
                  <Textarea
                    id="resources"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter resources"
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
  TitleField,
  TypeField,
  DueDateField,
  TotalPointsField,
  EstimatedTimeField,
  InstructionsField,
  AllowLateSubmissionsField,
  TimeLimitField,
  StatusField,
  ResourcesField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = assignmentsFields;