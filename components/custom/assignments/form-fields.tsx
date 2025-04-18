import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface assignmentsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.assignments.insert;

const assignmentsForm = () => {
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
        TitleField.displayName = "assignmentsForm.TitleField";
        assignmentsForm.TitleField = TitleField;
    

        const TypeField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="type" 
            label="Type"
            placeholder="Enter type"
            
            />
        );
        };
        TypeField.displayName = "assignmentsForm.TypeField";
        assignmentsForm.TypeField = TypeField;
    

        const DueDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="dueDate" 
          label="DueDate"
        />
        );
        };
        DueDateField.displayName = "assignmentsForm.DueDateField";
        assignmentsForm.DueDateField = DueDateField;
    

        const TotalPointsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="totalPoints" 
            label="TotalPoints"
            placeholder="Enter totalPoints"
            
            />
        );
        };
        TotalPointsField.displayName = "assignmentsForm.TotalPointsField";
        assignmentsForm.TotalPointsField = TotalPointsField;
    

        const EstimatedTimeField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="estimatedTime" 
            label="EstimatedTime"
            placeholder="Enter estimatedTime"
            
            />
        );
        };
        EstimatedTimeField.displayName = "assignmentsForm.EstimatedTimeField";
        assignmentsForm.EstimatedTimeField = EstimatedTimeField;
    

        const InstructionsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="instructions" 
            label="Instructions"
            placeholder="Enter instructions"
            
            />
        );
        };
        InstructionsField.displayName = "assignmentsForm.InstructionsField";
        assignmentsForm.InstructionsField = InstructionsField;
    

        const AllowLateSubmissionsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="allowLateSubmissions" 
            label="AllowLateSubmissions"
          />
        );
        };
        AllowLateSubmissionsField.displayName = "assignmentsForm.AllowLateSubmissionsField";
        assignmentsForm.AllowLateSubmissionsField = AllowLateSubmissionsField;
    

        const TimeLimitField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="timeLimit" 
            label="TimeLimit"
            placeholder="Enter timeLimit"
            
            />
        );
        };
        TimeLimitField.displayName = "assignmentsForm.TimeLimitField";
        assignmentsForm.TimeLimitField = TimeLimitField;
    

        const StatusField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="status"
            label="Status"
            options={[{ value: "draft", label: "Draft" }, { value: "published", label: "Published" }, { value: "graded", label: "Graded" }, { value: "archived", label: "Archived" }]}
            placeholder="Select status"
          />
        );
        };
        StatusField.displayName = "assignmentsForm.StatusField";
        assignmentsForm.StatusField = StatusField;
    

        const ResourcesField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="resources" 
            label="Resources"
            placeholder="Enter resources"
            rows={3}
          />
        );
        };
        ResourcesField.displayName = "assignmentsForm.ResourcesField";
        assignmentsForm.ResourcesField = ResourcesField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "assignmentsForm.CreatedAtField";
        assignmentsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "assignmentsForm.UpdatedAtField";
        assignmentsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "assignmentsForm.EnableRLSField";
        assignmentsForm.EnableRLSField = EnableRLSField;
    

export default assignmentsForm;