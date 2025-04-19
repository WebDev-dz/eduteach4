import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface usersFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.users.insert;

const usersForm = () => {
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
        NameField.displayName = "usersForm.NameField";
        usersForm.NameField = NameField;
    

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
        EmailField.displayName = "usersForm.EmailField";
        usersForm.EmailField = EmailField;
    

        const EmailVerifiedField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="emailVerified" 
          label="EmailVerified"
        />
        );
        };
        EmailVerifiedField.displayName = "usersForm.EmailVerifiedField";
        usersForm.EmailVerifiedField = EmailVerifiedField;
    

        const ImageField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="image" 
            label="Image"
            placeholder="Enter image"
            
            />
        );
        };
        ImageField.displayName = "usersForm.ImageField";
        usersForm.ImageField = ImageField;
    

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
        FirstNameField.displayName = "usersForm.FirstNameField";
        usersForm.FirstNameField = FirstNameField;
    

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
        LastNameField.displayName = "usersForm.LastNameField";
        usersForm.LastNameField = LastNameField;
    

        const PasswordHashField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="passwordHash" 
            label="PasswordHash"
            placeholder="Enter passwordHash"
            
            />
        );
        };
        PasswordHashField.displayName = "usersForm.PasswordHashField";
        usersForm.PasswordHashField = PasswordHashField;
    

        const RoleField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="role"
            label="Role"
            options={[{ value: "teacher", label: "Teacher" }, { value: "admin", label: "Admin" }, { value: "department_head", label: "Department Head" }, { value: "school_admin", label: "School Admin" }]}
            placeholder="Select role"
          />
        );
        };
        RoleField.displayName = "usersForm.RoleField";
        usersForm.RoleField = RoleField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "usersForm.CreatedAtField";
        usersForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "usersForm.UpdatedAtField";
        usersForm.UpdatedAtField = UpdatedAtField;
    

        const LastLoginAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="lastLoginAt" 
          label="LastLoginAt"
        />
        );
        };
        LastLoginAtField.displayName = "usersForm.LastLoginAtField";
        usersForm.LastLoginAtField = LastLoginAtField;
    

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
        EnableRLSField.displayName = "usersForm.EnableRLSField";
        usersForm.EnableRLSField = EnableRLSField;
    

export default usersForm;