import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EntityFormData = typeof defaultValues.lessonPlans.insert;

const lessonPlansFields: Omit<FormFields<EntityFormData>, "IdField | ClassIdField | TeacherIdField | OrganizationIdField"> = {

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

    DurationField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="duration">Duration</FormLabel>
                <FormControl>
                  <Input
                    id="duration"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter duration"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    DateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="date">Date</FormLabel>
                <FormControl>
                  <Input
                    id="date"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter date"
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
                      
            <SelectItem value="complete">Complete</SelectItem>
                      
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

    ObjectivesField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="objectives"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="objectives">Objectives</FormLabel>
                <FormControl>
                  <Textarea
                    id="objectives"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter objectives"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaterialsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="materials"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="materials">Materials</FormLabel>
                <FormControl>
                  <Textarea
                    id="materials"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter materials"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    IntroductionField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="introduction"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="introduction">Introduction</FormLabel>
                <FormControl>
                  <Input
                    id="introduction"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter introduction"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MainActivityField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="mainActivity"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="mainActivity">MainActivity</FormLabel>
                <FormControl>
                  <Input
                    id="mainActivity"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter mainActivity"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ConclusionField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="conclusion"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="conclusion">Conclusion</FormLabel>
                <FormControl>
                  <Input
                    id="conclusion"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter conclusion"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AssessmentField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="assessment"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="assessment">Assessment</FormLabel>
                <FormControl>
                  <Input
                    id="assessment"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter assessment"
                  />
                </FormControl>
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

    ProcedureField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="procedure"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="procedure">Procedure</FormLabel>
                <FormControl>
                  <Textarea
                    id="procedure"
                    rows="3"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter procedure"
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
  SubjectField,
  GradeLevelField,
  DurationField,
  DateField,
  StatusField,
  ObjectivesField,
  MaterialsField,
  IntroductionField,
  MainActivityField,
  ConclusionField,
  AssessmentField,
  NotesField,
  CreatedAtField,
  UpdatedAtField,
  ProcedureField,
  EnableRLSField,
} = lessonPlansFields;