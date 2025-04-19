import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface studentsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.students.insert;

const studentsForm = () => {
  return;
};


        const FirstNameField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="firstName" 
            label="FirstName"
            placeholder="Enter firstName"
            
            />
        );
        };
        FirstNameField.displayName = "studentsForm.FirstNameField";
        studentsForm.FirstNameField = FirstNameField;
    

        const LastNameField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="lastName" 
            label="LastName"
            placeholder="Enter lastName"
            
            />
        );
        };
        LastNameField.displayName = "studentsForm.LastNameField";
        studentsForm.LastNameField = LastNameField;
    

        const EmailField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="email" 
            label="Email"
            placeholder="Enter email"
            
            />
        );
        };
        EmailField.displayName = "studentsForm.EmailField";
        studentsForm.EmailField = EmailField;
    

        const DateOfBirthField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="dateOfBirth" 
            label="DateOfBirth"
            placeholder="Enter dateOfBirth"
            
            />
        );
        };
        DateOfBirthField.displayName = "studentsForm.DateOfBirthField";
        studentsForm.DateOfBirthField = DateOfBirthField;
    

        const GenderField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="gender"
            label="Gender"
            options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }, { value: "prefer_not_to_say", label: "Prefer Not To Say" }]}
            placeholder="Select gender"
          />
        );
        };
        GenderField.displayName = "studentsForm.GenderField";
        studentsForm.GenderField = GenderField;
    

        const EnrollmentDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="enrollmentDate" 
          label="EnrollmentDate"
        />
        );
        };
        EnrollmentDateField.displayName = "studentsForm.EnrollmentDateField";
        studentsForm.EnrollmentDateField = EnrollmentDateField;
    

        const PreviousSchoolField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="previousSchool" 
            label="PreviousSchool"
            placeholder="Enter previousSchool"
            
            />
        );
        };
        PreviousSchoolField.displayName = "studentsForm.PreviousSchoolField";
        studentsForm.PreviousSchoolField = PreviousSchoolField;
    

        const SpecialNeedsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="specialNeeds" 
            label="SpecialNeeds"
          />
        );
        };
        SpecialNeedsField.displayName = "studentsForm.SpecialNeedsField";
        studentsForm.SpecialNeedsField = SpecialNeedsField;
    

        const NotesField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="notes" 
            label="Notes"
            placeholder="Enter notes"
            rows={3}
          />
        );
        };
        NotesField.displayName = "studentsForm.NotesField";
        studentsForm.NotesField = NotesField;
    

        const AddressField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="address" 
            label="Address"
            placeholder="Enter address"
            
            />
        );
        };
        AddressField.displayName = "studentsForm.AddressField";
        studentsForm.AddressField = AddressField;
    

        const EmergencyContactField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="emergencyContact" 
            label="EmergencyContact"
            placeholder="Enter emergencyContact"
            
            />
        );
        };
        EmergencyContactField.displayName = "studentsForm.EmergencyContactField";
        studentsForm.EmergencyContactField = EmergencyContactField;
    

        const EmergencyPhoneField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="emergencyPhone" 
            label="EmergencyPhone"
            placeholder="Enter emergencyPhone"
            
            />
        );
        };
        EmergencyPhoneField.displayName = "studentsForm.EmergencyPhoneField";
        studentsForm.EmergencyPhoneField = EmergencyPhoneField;
    

        const RelationshipField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="relationship" 
            label="Relationship"
            placeholder="Enter relationship"
            
            />
        );
        };
        RelationshipField.displayName = "studentsForm.RelationshipField";
        studentsForm.RelationshipField = RelationshipField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "studentsForm.CreatedAtField";
        studentsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "studentsForm.UpdatedAtField";
        studentsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "studentsForm.EnableRLSField";
        studentsForm.EnableRLSField = EnableRLSField;
    

export default studentsForm;