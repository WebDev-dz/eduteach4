import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface subscriptionsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.subscriptions.insert;

const subscriptionsForm = () => {
  return;
};


        const PlanField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="plan"
            label="Plan"
            options={[{ value: "starter", label: "Starter" }, { value: "professional", label: "Professional" }, { value: "school", label: "School" }]}
            placeholder="Select plan"
          />
        );
        };
        PlanField.displayName = "subscriptionsForm.PlanField";
        subscriptionsForm.PlanField = PlanField;
    

        const StatusField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="status"
            label="Status"
            options={[{ value: "active", label: "Active" }, { value: "canceled", label: "Canceled" }, { value: "incomplete", label: "Incomplete" }, { value: "incomplete_expired", label: "Incomplete Expired" }, { value: "past_due", label: "Past Due" }, { value: "trialing", label: "Trialing" }, { value: "unpaid", label: "Unpaid" }]}
            placeholder="Select status"
          />
        );
        };
        StatusField.displayName = "subscriptionsForm.StatusField";
        subscriptionsForm.StatusField = StatusField;
    

        const CurrentPeriodStartField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="currentPeriodStart" 
          label="CurrentPeriodStart"
        />
        );
        };
        CurrentPeriodStartField.displayName = "subscriptionsForm.CurrentPeriodStartField";
        subscriptionsForm.CurrentPeriodStartField = CurrentPeriodStartField;
    

        const CurrentPeriodEndField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="currentPeriodEnd" 
          label="CurrentPeriodEnd"
        />
        );
        };
        CurrentPeriodEndField.displayName = "subscriptionsForm.CurrentPeriodEndField";
        subscriptionsForm.CurrentPeriodEndField = CurrentPeriodEndField;
    

        const CancelAtPeriodEndField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="cancelAtPeriodEnd" 
            label="CancelAtPeriodEnd"
          />
        );
        };
        CancelAtPeriodEndField.displayName = "subscriptionsForm.CancelAtPeriodEndField";
        subscriptionsForm.CancelAtPeriodEndField = CancelAtPeriodEndField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "subscriptionsForm.CreatedAtField";
        subscriptionsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "subscriptionsForm.UpdatedAtField";
        subscriptionsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "subscriptionsForm.EnableRLSField";
        subscriptionsForm.EnableRLSField = EnableRLSField;
    

export default subscriptionsForm;