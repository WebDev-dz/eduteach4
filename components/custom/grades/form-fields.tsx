import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface gradesFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.grades.insert;

const gradesForm = () => {
  return;
};


        const ScoreField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="score" 
            label="Score"
            placeholder="Enter score"
            
            />
        );
        };
        ScoreField.displayName = "gradesForm.ScoreField";
        gradesForm.ScoreField = ScoreField;
    

        const MaxScoreField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="maxScore" 
            label="MaxScore"
            placeholder="Enter maxScore"
            
            />
        );
        };
        MaxScoreField.displayName = "gradesForm.MaxScoreField";
        gradesForm.MaxScoreField = MaxScoreField;
    

        const CommentsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="comments" 
            label="Comments"
            placeholder="Enter comments"
            
            />
        );
        };
        CommentsField.displayName = "gradesForm.CommentsField";
        gradesForm.CommentsField = CommentsField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "gradesForm.CreatedAtField";
        gradesForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "gradesForm.UpdatedAtField";
        gradesForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "gradesForm.EnableRLSField";
        gradesForm.EnableRLSField = EnableRLSField;
    

export default gradesForm;