import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface verificationTokensFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.verificationTokens.insert;

const verificationTokensForm = () => {
  return;
};


        const IdentifierField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="identifier" 
            label="Identifier"
            placeholder="Enter identifier"
            
            />
        );
        };
        IdentifierField.displayName = "verificationTokensForm.IdentifierField";
        verificationTokensForm.IdentifierField = IdentifierField;
    

        const TokenField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="token" 
            label="Token"
            placeholder="Enter token"
            
            />
        );
        };
        TokenField.displayName = "verificationTokensForm.TokenField";
        verificationTokensForm.TokenField = TokenField;
    

        const ExpiresField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="expires" 
          label="Expires"
        />
        );
        };
        ExpiresField.displayName = "verificationTokensForm.ExpiresField";
        verificationTokensForm.ExpiresField = ExpiresField;
    

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
        EnableRLSField.displayName = "verificationTokensForm.EnableRLSField";
        verificationTokensForm.EnableRLSField = EnableRLSField;
    

export default verificationTokensForm;