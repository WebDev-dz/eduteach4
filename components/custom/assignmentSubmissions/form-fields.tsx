import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface assignmentSubmissionsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.assignmentSubmissions.insert;

const assignmentSubmissionsForm = () => {
  return;
};


        const SubmissionDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="submissionDate" 
          label="SubmissionDate"
        />
        );
        };
        SubmissionDateField.displayName = "assignmentSubmissionsForm.SubmissionDateField";
        assignmentSubmissionsForm.SubmissionDateField = SubmissionDateField;
    

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
        ScoreField.displayName = "assignmentSubmissionsForm.ScoreField";
        assignmentSubmissionsForm.ScoreField = ScoreField;
    

        const FeedbackField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="feedback" 
            label="Feedback"
            placeholder="Enter feedback"
            
            />
        );
        };
        FeedbackField.displayName = "assignmentSubmissionsForm.FeedbackField";
        assignmentSubmissionsForm.FeedbackField = FeedbackField;
    

        const ContentField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="content" 
            label="Content"
            placeholder="Enter content"
            rows={5}
          />
        );
        };
        ContentField.displayName = "assignmentSubmissionsForm.ContentField";
        assignmentSubmissionsForm.ContentField = ContentField;
    

        const CommentsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="comments" 
            label="Comments"
            placeholder="Enter comments"
            rows={3}
          />
        );
        };
        CommentsField.displayName = "assignmentSubmissionsForm.CommentsField";
        assignmentSubmissionsForm.CommentsField = CommentsField;
    

        const AttachmentsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="attachments" 
            label="Attachments"
            placeholder="Enter attachments"
            rows={3}
          />
        );
        };
        AttachmentsField.displayName = "assignmentSubmissionsForm.AttachmentsField";
        assignmentSubmissionsForm.AttachmentsField = AttachmentsField;
    

        const IsLateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="isLate" 
            label="IsLate"
          />
        );
        };
        IsLateField.displayName = "assignmentSubmissionsForm.IsLateField";
        assignmentSubmissionsForm.IsLateField = IsLateField;
    

        const GradedByField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="gradedBy" 
            label="GradedBy"
            placeholder="Enter gradedBy"
            
            />
        );
        };
        GradedByField.displayName = "assignmentSubmissionsForm.GradedByField";
        assignmentSubmissionsForm.GradedByField = GradedByField;
    

        const GradedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="gradedAt" 
          label="GradedAt"
        />
        );
        };
        GradedAtField.displayName = "assignmentSubmissionsForm.GradedAtField";
        assignmentSubmissionsForm.GradedAtField = GradedAtField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "assignmentSubmissionsForm.CreatedAtField";
        assignmentSubmissionsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "assignmentSubmissionsForm.UpdatedAtField";
        assignmentSubmissionsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "assignmentSubmissionsForm.EnableRLSField";
        assignmentSubmissionsForm.EnableRLSField = EnableRLSField;
    

export default assignmentSubmissionsForm;