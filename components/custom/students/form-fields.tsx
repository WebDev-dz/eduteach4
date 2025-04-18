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

type EntityFormData = typeof defaultValues.students.insert;

const studentsFields: Omit<FormFields<EntityFormData>, "IdField | StudentIdField | TeacherIdField | OrganizationIdField"> = {

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

    DateOfBirthField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="dateOfBirth">DateOfBirth</FormLabel>
                <FormControl>
                  <Input
                    id="dateOfBirth"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter dateOfBirth"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    GenderField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="male">Male</SelectItem>
                      
            <SelectItem value="female">Female</SelectItem>
                      
            <SelectItem value="other">Other</SelectItem>
                      
            <SelectItem value="prefer_not_to_say">Prefer Not To Say</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

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

    PreviousSchoolField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="previousSchool"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="previousSchool">PreviousSchool</FormLabel>
                <FormControl>
                  <Input
                    id="previousSchool"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter previousSchool"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    SpecialNeedsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="specialNeeds"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="specialNeeds"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="specialNeeds">SpecialNeeds</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    NotesField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="notes">Notes</FormLabel>
                <FormControl>
                  <Textarea
                    id="notes"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter notes"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AddressField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="address">Address</FormLabel>
                <FormControl>
                  <Input
                    id="address"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter address"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EmergencyContactField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="emergencyContact"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="emergencyContact">EmergencyContact</FormLabel>
                <FormControl>
                  <Input
                    id="emergencyContact"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter emergencyContact"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EmergencyPhoneField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="emergencyPhone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="emergencyPhone">EmergencyPhone</FormLabel>
                <FormControl>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter emergencyPhone"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    RelationshipField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="relationship"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="relationship">Relationship</FormLabel>
                <FormControl>
                  <Input
                    id="relationship"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter relationship"
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
  FirstNameField,
  LastNameField,
  EmailField,
  DateOfBirthField,
  GenderField,
  EnrollmentDateField,
  PreviousSchoolField,
  SpecialNeedsField,
  NotesField,
  AddressField,
  EmergencyContactField,
  EmergencyPhoneField,
  RelationshipField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = studentsFields;