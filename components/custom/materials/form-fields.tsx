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

type EntityFormData = typeof defaultValues.materials.insert;

const materialsFields: Omit<FormFields<EntityFormData>, "IdField | ClassIdField | TeacherIdField | OrganizationIdField"> = {

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

    FileUrlField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="fileUrl"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="fileUrl">FileUrl</FormLabel>
                <FormControl>
                  <Input
                    id="fileUrl"
                    type="url"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter fileUrl"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    FileSizeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="fileSize"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="fileSize">FileSize</FormLabel>
                <FormControl>
                  <Input
                    id="fileSize"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter fileSize"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    FileTypeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="fileType"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="fileType">FileType</FormLabel>
                <FormControl>
                  <Input
                    id="fileType"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter fileType"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ShareWithStudentsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="shareWithStudents"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="shareWithStudents"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="shareWithStudents">ShareWithStudents</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ShareWithTeachersField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="shareWithTeachers"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="shareWithTeachers"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="shareWithTeachers">ShareWithTeachers</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    TagsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="tags">Tags</FormLabel>
                <FormControl>
                  <Textarea
                    id="tags"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter tags"
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
  NameField,
  TypeField,
  SubjectField,
  GradeLevelField,
  DescriptionField,
  FileUrlField,
  FileSizeField,
  FileTypeField,
  ShareWithStudentsField,
  ShareWithTeachersField,
  TagsField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = materialsFields;