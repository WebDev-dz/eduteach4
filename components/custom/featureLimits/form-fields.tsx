import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface featureLimitsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.featureLimits.insert;

const featureLimitsForm = () => {
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
        PlanField.displayName = "featureLimitsForm.PlanField";
        featureLimitsForm.PlanField = PlanField;
    

        const MaxClassesField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="maxClasses" 
            label="MaxClasses"
            placeholder="Enter maxClasses"
            
            />
        );
        };
        MaxClassesField.displayName = "featureLimitsForm.MaxClassesField";
        featureLimitsForm.MaxClassesField = MaxClassesField;
    

        const MaxStudentsPerClassField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="maxStudentsPerClass" 
            label="MaxStudentsPerClass"
            placeholder="Enter maxStudentsPerClass"
            
            />
        );
        };
        MaxStudentsPerClassField.displayName = "featureLimitsForm.MaxStudentsPerClassField";
        featureLimitsForm.MaxStudentsPerClassField = MaxStudentsPerClassField;
    

        const MaxStorageGBField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="maxStorageGB" 
            label="MaxStorageGB"
            placeholder="Enter maxStorageGB"
            
            />
        );
        };
        MaxStorageGBField.displayName = "featureLimitsForm.MaxStorageGBField";
        featureLimitsForm.MaxStorageGBField = MaxStorageGBField;
    

        const AdvancedGradingField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="advancedGrading" 
            label="AdvancedGrading"
          />
        );
        };
        AdvancedGradingField.displayName = "featureLimitsForm.AdvancedGradingField";
        featureLimitsForm.AdvancedGradingField = AdvancedGradingField;
    

        const LessonPlanningField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="lessonPlanning" 
            label="LessonPlanning"
          />
        );
        };
        LessonPlanningField.displayName = "featureLimitsForm.LessonPlanningField";
        featureLimitsForm.LessonPlanningField = LessonPlanningField;
    

        const StudentAnalyticsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="studentAnalytics" 
            label="StudentAnalytics"
          />
        );
        };
        StudentAnalyticsField.displayName = "featureLimitsForm.StudentAnalyticsField";
        featureLimitsForm.StudentAnalyticsField = StudentAnalyticsField;
    

        const ParentCommunicationField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="parentCommunication" 
            label="ParentCommunication"
          />
        );
        };
        ParentCommunicationField.displayName = "featureLimitsForm.ParentCommunicationField";
        featureLimitsForm.ParentCommunicationField = ParentCommunicationField;
    

        const AdminDashboardField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="adminDashboard" 
            label="AdminDashboard"
          />
        );
        };
        AdminDashboardField.displayName = "featureLimitsForm.AdminDashboardField";
        featureLimitsForm.AdminDashboardField = AdminDashboardField;
    

        const DepartmentAnalyticsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="departmentAnalytics" 
            label="DepartmentAnalytics"
          />
        );
        };
        DepartmentAnalyticsField.displayName = "featureLimitsForm.DepartmentAnalyticsField";
        featureLimitsForm.DepartmentAnalyticsField = DepartmentAnalyticsField;
    

        const CustomIntegrationsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="customIntegrations" 
            label="CustomIntegrations"
          />
        );
        };
        CustomIntegrationsField.displayName = "featureLimitsForm.CustomIntegrationsField";
        featureLimitsForm.CustomIntegrationsField = CustomIntegrationsField;
    

        const PrioritySupportField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="prioritySupport" 
            label="PrioritySupport"
          />
        );
        };
        PrioritySupportField.displayName = "featureLimitsForm.PrioritySupportField";
        featureLimitsForm.PrioritySupportField = PrioritySupportField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "featureLimitsForm.CreatedAtField";
        featureLimitsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "featureLimitsForm.UpdatedAtField";
        featureLimitsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "featureLimitsForm.EnableRLSField";
        featureLimitsForm.EnableRLSField = EnableRLSField;
    

export default featureLimitsForm;