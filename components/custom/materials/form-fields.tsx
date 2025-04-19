import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface materialsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.materials.insert;

const materialsForm = () => {
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
        NameField.displayName = "materialsForm.NameField";
        materialsForm.NameField = NameField;
    

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
        TypeField.displayName = "materialsForm.TypeField";
        materialsForm.TypeField = TypeField;
    

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
        SubjectField.displayName = "materialsForm.SubjectField";
        materialsForm.SubjectField = SubjectField;
    

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
        GradeLevelField.displayName = "materialsForm.GradeLevelField";
        materialsForm.GradeLevelField = GradeLevelField;
    

        const DescriptionField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="description" 
            label="Description"
            placeholder="Enter description"
            rows={3}
          />
        );
        };
        DescriptionField.displayName = "materialsForm.DescriptionField";
        materialsForm.DescriptionField = DescriptionField;
    

        const FileUrlField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="fileUrl" 
            label="FileUrl"
            placeholder="Enter fileUrl"
            
            />
        );
        };
        FileUrlField.displayName = "materialsForm.FileUrlField";
        materialsForm.FileUrlField = FileUrlField;
    

        const FileSizeField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="fileSize" 
            label="FileSize"
            placeholder="Enter fileSize"
            
            />
        );
        };
        FileSizeField.displayName = "materialsForm.FileSizeField";
        materialsForm.FileSizeField = FileSizeField;
    

        const FileTypeField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <StringInput 
            form={form} 
            name="fileType" 
            label="FileType"
            placeholder="Enter fileType"
            
            />
        );
        };
        FileTypeField.displayName = "materialsForm.FileTypeField";
        materialsForm.FileTypeField = FileTypeField;
    

        const ShareWithStudentsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="shareWithStudents" 
            label="ShareWithStudents"
          />
        );
        };
        ShareWithStudentsField.displayName = "materialsForm.ShareWithStudentsField";
        materialsForm.ShareWithStudentsField = ShareWithStudentsField;
    

        const ShareWithTeachersField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <CheckboxInput 
            form={form} 
            name="shareWithTeachers" 
            label="ShareWithTeachers"
          />
        );
        };
        ShareWithTeachersField.displayName = "materialsForm.ShareWithTeachersField";
        materialsForm.ShareWithTeachersField = ShareWithTeachersField;
    

        const TagsField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <TextInput 
            form={form} 
            name="tags" 
            label="Tags"
            placeholder="Enter tags"
            rows={3}
          />
        );
        };
        TagsField.displayName = "materialsForm.TagsField";
        materialsForm.TagsField = TagsField;
    

        const CreatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="createdAt" 
          label="CreatedAt"
        />
        );
        };
        CreatedAtField.displayName = "materialsForm.CreatedAtField";
        materialsForm.CreatedAtField = CreatedAtField;
    

        const UpdatedAtField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="updatedAt" 
          label="UpdatedAt"
        />
        );
        };
        UpdatedAtField.displayName = "materialsForm.UpdatedAtField";
        materialsForm.UpdatedAtField = UpdatedAtField;
    

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
        EnableRLSField.displayName = "materialsForm.EnableRLSField";
        materialsForm.EnableRLSField = EnableRLSField;
    

export default materialsForm;