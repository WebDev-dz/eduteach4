import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface organizationsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.organizations.insert;

const organizationsForm = () => {
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
        NameField.displayName = "organizationsForm.NameField";
        organizationsForm.NameField = NameField;
    

        const DomainField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="domain" 
            label="Domain"
            placeholder="Enter domain"
            
            />
        );
        };
        DomainField.displayName = "organizationsForm.DomainField";
        organizationsForm.DomainField = DomainField;
    

        const LogoField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="logo" 
            label="Logo"
            placeholder="Enter logo"
            
            />
        );
        };
        LogoField.displayName = "organizationsForm.LogoField";
        organizationsForm.LogoField = LogoField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "organizationsForm.CreatedAtField";
        organizationsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "organizationsForm.UpdatedAtField";
        organizationsForm.UpdatedAtField = UpdatedAtField;
    

        const MaxUsersField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="maxUsers" 
            label="MaxUsers"
            placeholder="Enter maxUsers"
            
            />
        );
        };
        MaxUsersField.displayName = "organizationsForm.MaxUsersField";
        organizationsForm.MaxUsersField = MaxUsersField;
    

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
        EnableRLSField.displayName = "organizationsForm.EnableRLSField";
        organizationsForm.EnableRLSField = EnableRLSField;
    

export default organizationsForm;