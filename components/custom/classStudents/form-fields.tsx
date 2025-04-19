import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import React from "react";
import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";

interface classStudentsFieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}
type EntityFormData = typeof defaultValues.classStudents.insert;

const classStudentsForm = () => {
  return;
};


        const EnrollmentDateField = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            <DateInput 
          form={form} 
          name="enrollmentDate" 
          label="EnrollmentDate"
        />
        );
        };
        EnrollmentDateField.displayName = "classStudentsForm.EnrollmentDateField";
        classStudentsForm.EnrollmentDateField = EnrollmentDateField;
    

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
        EnableRLSField.displayName = "classStudentsForm.EnableRLSField";
        classStudentsForm.EnableRLSField = EnableRLSField;
    

export default classStudentsForm;