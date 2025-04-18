import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface accountsFieldProps extends BaseInputProps {
    data?: { [key in keyof EntityFormData]?: EntityFormData[key] };
}
type EntityFormData = typeof defaultValues.accounts.insert;

const accountsForm = () => {
    return;
};


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
TypeField.displayName = "accountsForm.TypeField";
accountsForm.TypeField = TypeField;


const ProviderField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="provider"
            label="Provider"
            placeholder="Enter provider"

        />
    );
};
ProviderField.displayName = "accountsForm.ProviderField";
accountsForm.ProviderField = ProviderField;


const Refresh_tokenField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="refresh_token"
            label="Refresh_token"
            placeholder="Enter refresh_token"

        />
    );
};
Refresh_tokenField.displayName = "accountsForm.Refresh_tokenField";
accountsForm.Refresh_tokenField = Refresh_tokenField;


const Access_tokenField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="access_token"
            label="Access_token"
            placeholder="Enter access_token"

        />
    );
};
Access_tokenField.displayName = "accountsForm.Access_tokenField";
accountsForm.Access_tokenField = Access_tokenField;


const Expires_atField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <NumberInput
            form={form}
            name="expires_at"
            label="Expires_at"
            placeholder="Enter expires_at"
            min={"0"}
        />
    );
};
Expires_atField.displayName = "accountsForm.Expires_atField";
accountsForm.Expires_atField = Expires_atField;


const Token_typeField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="token_type"
            label="Token_type"
            placeholder="Enter token_type"

        />
    );
};
Token_typeField.displayName = "accountsForm.Token_typeField";
accountsForm.Token_typeField = Token_typeField;


const ScopeField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="scope"
            label="Scope"
            placeholder="Enter scope"

        />
    );
};
ScopeField.displayName = "accountsForm.ScopeField";
accountsForm.ScopeField = ScopeField;


const Id_tokenField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="id_token"
            label="Id_token"
            placeholder="Enter id_token"

        />
    );
};
Id_tokenField.displayName = "accountsForm.Id_tokenField";
accountsForm.Id_tokenField = Id_tokenField;


const Session_stateField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="session_state"
            label="Session_state"
            placeholder="Enter session_state"

        />
    );
};
Session_stateField.displayName = "accountsForm.Session_stateField";
accountsForm.Session_stateField = Session_stateField;


const Oauth_token_secretField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="oauth_token_secret"
            label="Oauth_token_secret"
            placeholder="Enter oauth_token_secret"

        />
    );
};
Oauth_token_secretField.displayName = "accountsForm.Oauth_token_secretField";
accountsForm.Oauth_token_secretField = Oauth_token_secretField;


const Oauth_tokenField = ({ form, data, ...props }: ClassFieldProps) => {
    return (
        <StringInput
            form={form}
            name="oauth_token"
            label="Oauth_token"
            placeholder="Enter oauth_token"

        />
    );
};
Oauth_tokenField.displayName = "accountsForm.Oauth_tokenField";
accountsForm.Oauth_tokenField = Oauth_tokenField;


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
EnableRLSField.displayName = "accountsForm.EnableRLSField";
accountsForm.EnableRLSField = EnableRLSField;


export default accountsForm;