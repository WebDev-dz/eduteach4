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

type EntityFormData = typeof defaultValues.classes.insert;

const classesFields: Omit<FormFields<EntityFormData>, "IdField | TeacherIdField | OrganizationIdField"> = {

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

    SubjectField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="mathematics">Mathematics</SelectItem>
                      
            <SelectItem value="science">Science</SelectItem>
                      
            <SelectItem value="english">English</SelectItem>
                      
            <SelectItem value="history">History</SelectItem>
                      
            <SelectItem value="geography">Geography</SelectItem>
                      
            <SelectItem value="art">Art</SelectItem>
                      
            <SelectItem value="music">Music</SelectItem>
                      
            <SelectItem value="physical_education">Physical Education</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    GradeLevelField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="gradeLevel"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="gradeLevel">GradeLevel</FormLabel>
                <FormControl>
                  <Input
                    id="gradeLevel"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter gradeLevel"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AcademicYearField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="academicYear"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="academicYear">AcademicYear</FormLabel>
                <FormControl>
                  <Input
                    id="academicYear"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter academicYear"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ScheduleField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="schedule">Schedule</FormLabel>
                <FormControl>
                  <Input
                    id="schedule"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter schedule"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    RoomField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="room">Room</FormLabel>
                <FormControl>
                  <Input
                    id="room"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter room"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CapacityField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="capacity">Capacity</FormLabel>
                <FormControl>
                  <Input
                    id="capacity"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter capacity"
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

    IsActiveField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="isActive"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="isActive">IsActive</FormLabel>
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
  NameField,
  SubjectField,
  GradeLevelField,
  AcademicYearField,
  ScheduleField,
  RoomField,
  CapacityField,
  DescriptionField,
  IsActiveField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = classesFields;