import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface lessonPlansFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.lessonPlans.insert;

const lessonPlansForm = () => {
  return;
};


        const TitleField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="title" 
            label="Title"
            placeholder="Enter title"
            
            />
        );
        };
        TitleField.displayName = "lessonPlansForm.TitleField";
        lessonPlansForm.TitleField = TitleField;
    

        const SubjectField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="subject"
            label="Subject"
            options={[{ value: "mathematics", label: "Mathematics" }, { value: "science", label: "Science" }, { value: "english", label: "English" }, { value: "history", label: "History" }, { value: "geography", label: "Geography" }, { value: "art", label: "Art" }, { value: "music", label: "Music" }, { value: "physical_education", label: "Physical Education" }]}
            placeholder="Select subject"
          />
        );
        };
        SubjectField.displayName = "lessonPlansForm.SubjectField";
        lessonPlansForm.SubjectField = SubjectField;
    

        const GradeLevelField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="gradeLevel" 
            label="GradeLevel"
            placeholder="Enter gradeLevel"
            
            />
        );
        };
        GradeLevelField.displayName = "lessonPlansForm.GradeLevelField";
        lessonPlansForm.GradeLevelField = GradeLevelField;
    

        const DurationField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="duration" 
            label="Duration"
            placeholder="Enter duration"
            
            />
        );
        };
        DurationField.displayName = "lessonPlansForm.DurationField";
        lessonPlansForm.DurationField = DurationField;
    

        const DateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="date" 
          label="Date"
        />
        );
        };
        DateField.displayName = "lessonPlansForm.DateField";
        lessonPlansForm.DateField = DateField;
    

        const StatusField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <SelectInput
            form={form}
            name="status"
            label="Status"
            options={[{ value: "draft", label: "Draft" }, { value: "complete", label: "Complete" }, { value: "archived", label: "Archived" }]}
            placeholder="Select status"
          />
        );
        };
        StatusField.displayName = "lessonPlansForm.StatusField";
        lessonPlansForm.StatusField = StatusField;
    

        const ObjectivesField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="objectives" 
            label="Objectives"
            placeholder="Enter objectives"
            rows={3}
          />
        );
        };
        ObjectivesField.displayName = "lessonPlansForm.ObjectivesField";
        lessonPlansForm.ObjectivesField = ObjectivesField;
    

        const MaterialsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="materials" 
            label="Materials"
            placeholder="Enter materials"
            rows={3}
          />
        );
        };
        MaterialsField.displayName = "lessonPlansForm.MaterialsField";
        lessonPlansForm.MaterialsField = MaterialsField;
    

        const IntroductionField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="introduction" 
            label="Introduction"
            placeholder="Enter introduction"
            
            />
        );
        };
        IntroductionField.displayName = "lessonPlansForm.IntroductionField";
        lessonPlansForm.IntroductionField = IntroductionField;
    

        const MainActivityField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="mainActivity" 
            label="MainActivity"
            placeholder="Enter mainActivity"
            
            />
        );
        };
        MainActivityField.displayName = "lessonPlansForm.MainActivityField";
        lessonPlansForm.MainActivityField = MainActivityField;
    

        const ConclusionField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="conclusion" 
            label="Conclusion"
            placeholder="Enter conclusion"
            
            />
        );
        };
        ConclusionField.displayName = "lessonPlansForm.ConclusionField";
        lessonPlansForm.ConclusionField = ConclusionField;
    

        const AssessmentField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="assessment" 
            label="Assessment"
            placeholder="Enter assessment"
            
            />
        );
        };
        AssessmentField.displayName = "lessonPlansForm.AssessmentField";
        lessonPlansForm.AssessmentField = AssessmentField;
    

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
        NotesField.displayName = "lessonPlansForm.NotesField";
        lessonPlansForm.NotesField = NotesField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "lessonPlansForm.CreatedAtField";
        lessonPlansForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "lessonPlansForm.UpdatedAtField";
        lessonPlansForm.UpdatedAtField = UpdatedAtField;
    

        const ProcedureField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="procedure" 
            label="Procedure"
            placeholder="Enter procedure"
            rows={3}
          />
        );
        };
        ProcedureField.displayName = "lessonPlansForm.ProcedureField";
        lessonPlansForm.ProcedureField = ProcedureField;
    

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
        EnableRLSField.displayName = "lessonPlansForm.EnableRLSField";
        lessonPlansForm.EnableRLSField = EnableRLSField;
    

export default lessonPlansForm;