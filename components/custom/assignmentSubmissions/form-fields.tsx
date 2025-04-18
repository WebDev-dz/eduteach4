import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

type EntityFormData = typeof defaultValues.assignmentSubmissions.insert;

const assignmentSubmissionsFields: Omit<FormFields<EntityFormData>, "IdField | AssignmentIdField | StudentIdField"> = {

    SubmissionDateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="submissionDate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="submissionDate">SubmissionDate</FormLabel>
                <FormControl>
                  <Input
                    id="submissionDate"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter submissionDate"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

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

    FeedbackField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="feedback">Feedback</FormLabel>
                <FormControl>
                  <Input
                    id="feedback"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter feedback"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ContentField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="content">Content</FormLabel>
                <FormControl>
                  <Textarea
                    id="content"
                    rows="5"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter content"
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
                  <Textarea
                    id="comments"
                    rows="3"
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

    AttachmentsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="attachments"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="attachments">Attachments</FormLabel>
                <FormControl>
                  <Textarea
                    id="attachments"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter attachments"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    IsLateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="isLate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="isLate"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="isLate">IsLate</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    GradedByField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="gradedBy"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="gradedBy">GradedBy</FormLabel>
                <FormControl>
                  <Input
                    id="gradedBy"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter gradedBy"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    GradedAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="gradedAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="gradedAt">GradedAt</FormLabel>
                <FormControl>
                  <Input
                    id="gradedAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter gradedAt"
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
  SubmissionDateField,
  ScoreField,
  FeedbackField,
  ContentField,
  CommentsField,
  AttachmentsField,
  IsLateField,
  GradedByField,
  GradedAtField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = assignmentSubmissionsFields;