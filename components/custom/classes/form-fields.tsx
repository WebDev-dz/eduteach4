import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface classesFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.classes.insert;

const classesForm = () => {
  return;
};


        const NameField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="name" 
            label="Name"
            placeholder="Enter name"
            
            />
        );
        };
        NameField.displayName = "classesForm.NameField";
        classesForm.NameField = NameField;
    

        const SubjectField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="subject"
            label="Subject"
            options={[{ value: "mathematics", label: "Mathematics" }, { value: "science", label: "Science" }, { value: "english", label: "English" }, { value: "history", label: "History" }, { value: "geography", label: "Geography" }, { value: "art", label: "Art" }, { value: "music", label: "Music" }, { value: "physical_education", label: "Physical Education" }]}
            placeholder="Select subject"
          />
        );
        };
        SubjectField.displayName = "classesForm.SubjectField";
        classesForm.SubjectField = SubjectField;
    

        const GradeLevelField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="gradeLevel" 
            label="GradeLevel"
            placeholder="Enter gradeLevel"
            
            />
        );
        };
        GradeLevelField.displayName = "classesForm.GradeLevelField";
        classesForm.GradeLevelField = GradeLevelField;
    

        const AcademicYearField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="academicYear" 
            label="AcademicYear"
            placeholder="Enter academicYear"
            
            />
        );
        };
        AcademicYearField.displayName = "classesForm.AcademicYearField";
        classesForm.AcademicYearField = AcademicYearField;
    

        const ScheduleField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="schedule" 
            label="Schedule"
            placeholder="Enter schedule"
            
            />
        );
        };
        ScheduleField.displayName = "classesForm.ScheduleField";
        classesForm.ScheduleField = ScheduleField;
    

        const RoomField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="room" 
            label="Room"
            placeholder="Enter room"
            
            />
        );
        };
        RoomField.displayName = "classesForm.RoomField";
        classesForm.RoomField = RoomField;
    

        const CapacityField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="capacity" 
            label="Capacity"
            placeholder="Enter capacity"
            
            />
        );
        };
        CapacityField.displayName = "classesForm.CapacityField";
        classesForm.CapacityField = CapacityField;
    

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
        DescriptionField.displayName = "classesForm.DescriptionField";
        classesForm.DescriptionField = DescriptionField;
    

        const IsActiveField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="isActive" 
            label="IsActive"
          />
        );
        };
        IsActiveField.displayName = "classesForm.IsActiveField";
        classesForm.IsActiveField = IsActiveField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "classesForm.CreatedAtField";
        classesForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "classesForm.UpdatedAtField";
        classesForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "classesForm.EnableRLSField";
        classesForm.EnableRLSField = EnableRLSField;
    

export default classesForm;