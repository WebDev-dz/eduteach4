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

type EntityFormData = typeof defaultValues.calendarEvents.insert;

const calendarEventsFields: Omit<FormFields<EntityFormData>, "IdField | ClassIdField | AssignmentIdField | LessonPlanIdField | TeacherIdField"> = {

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

    DescriptionField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl>
                  <Textarea
                    id="description"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter description"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    StartDateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="startDate">StartDate</FormLabel>
                <FormControl>
                  <Input
                    id="startDate"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter startDate"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EndDateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="endDate">EndDate</FormLabel>
                <FormControl>
                  <Input
                    id="endDate"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter endDate"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AllDayField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="allDay"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="allDay"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="allDay">AllDay</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    LocationField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="location">Location</FormLabel>
                <FormControl>
                  <Input
                    id="location"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter location"
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="class">Class</SelectItem>
                      
            <SelectItem value="assignment">Assignment</SelectItem>
                      
            <SelectItem value="exam">Exam</SelectItem>
                      
            <SelectItem value="meeting">Meeting</SelectItem>
                      
            <SelectItem value="personal">Personal</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ColorField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="color">Color</FormLabel>
                <FormControl>
                  <Input
                    id="color"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter color"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    RecurrenceRuleField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="recurrenceRule"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="recurrenceRule">RecurrenceRule</FormLabel>
                <FormControl>
                  <Input
                    id="recurrenceRule"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter recurrenceRule"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    IsRecurringField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="isRecurring"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="isRecurring"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="isRecurring">IsRecurring</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    VisibilityField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="visibility">Visibility</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="public">Public</SelectItem>
                      
            <SelectItem value="private">Private</SelectItem>
                      
            <SelectItem value="organization">Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    RemindersField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="reminders"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="reminders">Reminders</FormLabel>
                <FormControl>
                  <Textarea
                    id="reminders"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter reminders"
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
  DescriptionField,
  StartDateField,
  EndDateField,
  AllDayField,
  LocationField,
  TypeField,
  ColorField,
  RecurrenceRuleField,
  IsRecurringField,
  VisibilityField,
  RemindersField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = calendarEventsFields;