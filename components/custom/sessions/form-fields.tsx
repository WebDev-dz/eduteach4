import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface sessionsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.sessions.insert;

const sessionsForm = () => {
  return;
};


        const SessionTokenField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="sessionToken" 
            label="SessionToken"
            placeholder="Enter sessionToken"
            
            />
        );
        };
        SessionTokenField.displayName = "sessionsForm.SessionTokenField";
        sessionsForm.SessionTokenField = SessionTokenField;
    

        const ExpiresField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="expires" 
          label="Expires"
        />
        );
        };
        ExpiresField.displayName = "sessionsForm.ExpiresField";
        sessionsForm.ExpiresField = ExpiresField;
    

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
        EnableRLSField.displayName = "sessionsForm.EnableRLSField";
        sessionsForm.EnableRLSField = EnableRLSField;
    

export default sessionsForm;