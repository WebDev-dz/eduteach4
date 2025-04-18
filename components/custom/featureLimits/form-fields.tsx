import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EntityFormData = typeof defaultValues.featureLimits.insert;

const featureLimitsFields: Omit<FormFields<EntityFormData>, "IdField"> = {

    PlanField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="plan">Plan</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="plan">
                      <SelectValue placeholder="Select plan" />
                    </SelectTrigger>
                    <SelectContent>
                      
            <SelectItem value="starter">Starter</SelectItem>
                      
            <SelectItem value="professional">Professional</SelectItem>
                      
            <SelectItem value="school">School</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaxClassesField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="maxClasses"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="maxClasses">MaxClasses</FormLabel>
                <FormControl>
                  <Input
                    id="maxClasses"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter maxClasses"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaxStudentsPerClassField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="maxStudentsPerClass"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="maxStudentsPerClass">MaxStudentsPerClass</FormLabel>
                <FormControl>
                  <Input
                    id="maxStudentsPerClass"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter maxStudentsPerClass"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    MaxStorageGBField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="maxStorageGB"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="maxStorageGB">MaxStorageGB</FormLabel>
                <FormControl>
                  <Input
                    id="maxStorageGB"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter maxStorageGB"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AdvancedGradingField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="advancedGrading"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="advancedGrading"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="advancedGrading">AdvancedGrading</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    LessonPlanningField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="lessonPlanning"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="lessonPlanning"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="lessonPlanning">LessonPlanning</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    StudentAnalyticsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="studentAnalytics"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="studentAnalytics"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="studentAnalytics">StudentAnalytics</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ParentCommunicationField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="parentCommunication"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="parentCommunication"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="parentCommunication">ParentCommunication</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    AdminDashboardField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="adminDashboard"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="adminDashboard"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="adminDashboard">AdminDashboard</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    DepartmentAnalyticsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="departmentAnalytics"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="departmentAnalytics"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="departmentAnalytics">DepartmentAnalytics</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CustomIntegrationsField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="customIntegrations"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="customIntegrations"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="customIntegrations">CustomIntegrations</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    PrioritySupportField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="prioritySupport"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="prioritySupport"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="prioritySupport">PrioritySupport</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    CreatedAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="createdAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="createdAt">CreatedAt</FormLabel>
                <FormControl>
                  <Input
                    id="createdAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter createdAt"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    UpdatedAtField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="updatedAt"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="updatedAt">UpdatedAt</FormLabel>
                <FormControl>
                  <Input
                    id="updatedAt"
                    type="date"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter updatedAt"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    EnableRLSField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="enableRLS"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="enableRLS">EnableRLS</FormLabel>
                <FormControl>
                  <Input
                    id="enableRLS"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter enableRLS"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },
};

// Export all individual fields for direct imports
export const {
  PlanField,
  MaxClassesField,
  MaxStudentsPerClassField,
  MaxStorageGBField,
  AdvancedGradingField,
  LessonPlanningField,
  StudentAnalyticsField,
  ParentCommunicationField,
  AdminDashboardField,
  DepartmentAnalyticsField,
  CustomIntegrationsField,
  PrioritySupportField,
  CreatedAtField,
  UpdatedAtField,
  EnableRLSField,
} = featureLimitsFields;