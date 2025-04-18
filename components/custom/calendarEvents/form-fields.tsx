import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface calendarEventsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.calendarEvents.insert;

const calendarEventsForm = () => {
  return;
};


        const TitleField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="title" 
            label="Title"
            placeholder="Enter title"
            
            />
        );
        };
        TitleField.displayName = "calendarEventsForm.TitleField";
        calendarEventsForm.TitleField = TitleField;
    

        const DescriptionField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="description" 
            label="Description"
            placeholder="Enter description"
            rows={3}
          />
        );
        };
        DescriptionField.displayName = "calendarEventsForm.DescriptionField";
        calendarEventsForm.DescriptionField = DescriptionField;
    

        const StartDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="startDate" 
          label="StartDate"
        />
        );
        };
        StartDateField.displayName = "calendarEventsForm.StartDateField";
        calendarEventsForm.StartDateField = StartDateField;
    

        const EndDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="endDate" 
          label="EndDate"
        />
        );
        };
        EndDateField.displayName = "calendarEventsForm.EndDateField";
        calendarEventsForm.EndDateField = EndDateField;
    

        const AllDayField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="allDay" 
            label="AllDay"
          />
        );
        };
        AllDayField.displayName = "calendarEventsForm.AllDayField";
        calendarEventsForm.AllDayField = AllDayField;
    

        const LocationField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="location" 
            label="Location"
            placeholder="Enter location"
            
            />
        );
        };
        LocationField.displayName = "calendarEventsForm.LocationField";
        calendarEventsForm.LocationField = LocationField;
    

        const TypeField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="type"
            label="Type"
            options={[{ value: "class", label: "Class" }, { value: "assignment", label: "Assignment" }, { value: "exam", label: "Exam" }, { value: "meeting", label: "Meeting" }, { value: "personal", label: "Personal" }]}
            placeholder="Select type"
          />
        );
        };
        TypeField.displayName = "calendarEventsForm.TypeField";
        calendarEventsForm.TypeField = TypeField;
    

        const ColorField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="color" 
            label="Color"
            placeholder="Enter color"
            
            />
        );
        };
        ColorField.displayName = "calendarEventsForm.ColorField";
        calendarEventsForm.ColorField = ColorField;
    

        const RecurrenceRuleField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="recurrenceRule" 
            label="RecurrenceRule"
            placeholder="Enter recurrenceRule"
            
            />
        );
        };
        RecurrenceRuleField.displayName = "calendarEventsForm.RecurrenceRuleField";
        calendarEventsForm.RecurrenceRuleField = RecurrenceRuleField;
    

        const IsRecurringField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="isRecurring" 
            label="IsRecurring"
          />
        );
        };
        IsRecurringField.displayName = "calendarEventsForm.IsRecurringField";
        calendarEventsForm.IsRecurringField = IsRecurringField;
    

        const VisibilityField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="visibility"
            label="Visibility"
            options={[{ value: "public", label: "Public" }, { value: "private", label: "Private" }, { value: "organization", label: "Organization" }]}
            placeholder="Select visibility"
          />
        );
        };
        VisibilityField.displayName = "calendarEventsForm.VisibilityField";
        calendarEventsForm.VisibilityField = VisibilityField;
    

        const RemindersField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="reminders" 
            label="Reminders"
            placeholder="Enter reminders"
            rows={3}
          />
        );
        };
        RemindersField.displayName = "calendarEventsForm.RemindersField";
        calendarEventsForm.RemindersField = RemindersField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "calendarEventsForm.CreatedAtField";
        calendarEventsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "calendarEventsForm.UpdatedAtField";
        calendarEventsForm.UpdatedAtField = UpdatedAtField;
    

        const EnableRLSField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="enableRLS" 
            label="EnableRLS"
            placeholder="Enter enableRLS"
            
            />
        );
        };
        EnableRLSField.displayName = "calendarEventsForm.EnableRLSField";
        calendarEventsForm.EnableRLSField = EnableRLSField;
    

export default calendarEventsForm;