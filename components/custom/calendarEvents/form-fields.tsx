import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface CalendarEventsFormProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.calendarEvents.insert;

const CalendarEventsForm = () => {
  return;
};


        const TitleField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <StringInput 
            form={form} 
            name="title" 
            label="Title"
            placeholder="Enter title"
            
            />
        );
        };
        TitleField.displayName = "CalendarEventsForm.TitleField";
        CalendarEventsForm.TitleField = TitleField;
    

        const DescriptionField = ({ form, data, ...props }: CalendarEventsFormProps) => {
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
        DescriptionField.displayName = "CalendarEventsForm.DescriptionField";
        CalendarEventsForm.DescriptionField = DescriptionField;
    

        const StartDateField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <DateInput 
          form={form} 
          name="startDate" 
          label="StartDate"
        />
        );
        };
        StartDateField.displayName = "CalendarEventsForm.StartDateField";
        CalendarEventsForm.StartDateField = StartDateField;
    

        const EndDateField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <DateInput 
          form={form} 
          name="endDate" 
          label="EndDate"
        />
        );
        };
        EndDateField.displayName = "CalendarEventsForm.EndDateField";
        CalendarEventsForm.EndDateField = EndDateField;
    

        const AllDayField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="allDay" 
            label="AllDay"
          />
        );
        };
        AllDayField.displayName = "CalendarEventsForm.AllDayField";
        CalendarEventsForm.AllDayField = AllDayField;
    

        const LocationField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <StringInput 
            form={form} 
            name="location" 
            label="Location"
            placeholder="Enter location"
            
            />
        );
        };
        LocationField.displayName = "CalendarEventsForm.LocationField";
        CalendarEventsForm.LocationField = LocationField;
    

        const TypeField = ({ form, data, ...props }: CalendarEventsFormProps) => {
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
        TypeField.displayName = "CalendarEventsForm.TypeField";
        CalendarEventsForm.TypeField = TypeField;
    

        const ColorField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <StringInput 
            form={form} 
            name="color" 
            label="Color"
            placeholder="Enter color"
            
            />
        );
        };
        ColorField.displayName = "CalendarEventsForm.ColorField";
        CalendarEventsForm.ColorField = ColorField;
    

        const RecurrenceRuleField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <StringInput 
            form={form} 
            name="recurrenceRule" 
            label="RecurrenceRule"
            placeholder="Enter recurrenceRule"
            
            />
        );
        };
        RecurrenceRuleField.displayName = "CalendarEventsForm.RecurrenceRuleField";
        CalendarEventsForm.RecurrenceRuleField = RecurrenceRuleField;
    

        const IsRecurringField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="isRecurring" 
            label="IsRecurring"
          />
        );
        };
        IsRecurringField.displayName = "CalendarEventsForm.IsRecurringField";
        CalendarEventsForm.IsRecurringField = IsRecurringField;
    

        const VisibilityField = ({ form, data, ...props }: CalendarEventsFormProps) => {
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
        VisibilityField.displayName = "CalendarEventsForm.VisibilityField";
        CalendarEventsForm.VisibilityField = VisibilityField;
    

        const RemindersField = ({ form, data, ...props }: CalendarEventsFormProps) => {
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
        RemindersField.displayName = "CalendarEventsForm.RemindersField";
        CalendarEventsForm.RemindersField = RemindersField;
    

        const CreatedAtField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "CalendarEventsForm.CreatedAtField";
        CalendarEventsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "CalendarEventsForm.UpdatedAtField";
        CalendarEventsForm.UpdatedAtField = UpdatedAtField;
    

        const EnableRLSField = ({ form, data, ...props }: CalendarEventsFormProps) => {
        return (
            <StringInput 
            form={form} 
            name="enableRLS" 
            label="EnableRLS"
            placeholder="Enter enableRLS"
            
            />
        );
        };
        EnableRLSField.displayName = "CalendarEventsForm.EnableRLSField";
        CalendarEventsForm.EnableRLSField = EnableRLSField;
    

export default CalendarEventsForm;