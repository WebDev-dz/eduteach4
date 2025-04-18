import { FormFields } from "@/types/ui";
import { defaultValues } from "@/lib/consts";
import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";
import { Input } from "@/components/ui/input";

type EntityFormData = typeof defaultValues.accounts.insert;

const accountsFields: Omit<FormFields<EntityFormData>, "IdField | UserIdField | ProviderAccountIdField"> = {

    TypeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="type">Type</FormLabel>
                <FormControl>
                  <Input
                    id="type"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter type"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ProviderField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="provider"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="provider">Provider</FormLabel>
                <FormControl>
                  <Input
                    id="provider"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter provider"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Refresh_tokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="refresh_token"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="refresh_token">Refresh_token</FormLabel>
                <FormControl>
                  <Input
                    id="refresh_token"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter refresh_token"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Access_tokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="access_token"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="access_token">Access_token</FormLabel>
                <FormControl>
                  <Input
                    id="access_token"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter access_token"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Expires_atField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="expires_at"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="expires_at">Expires_at</FormLabel>
                <FormControl>
                  <Input
                    id="expires_at"
                    type="number" min="0"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter expires_at"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Token_typeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="token_type"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="token_type">Token_type</FormLabel>
                <FormControl>
                  <Input
                    id="token_type"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter token_type"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    ScopeField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="scope"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="scope">Scope</FormLabel>
                <FormControl>
                  <Input
                    id="scope"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter scope"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Id_tokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="id_token"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="id_token">Id_token</FormLabel>
                <FormControl>
                  <Input
                    id="id_token"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter id_token"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Session_stateField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="session_state"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="session_state">Session_state</FormLabel>
                <FormControl>
                  <Input
                    id="session_state"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter session_state"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Oauth_token_secretField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="oauth_token_secret"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="oauth_token_secret">Oauth_token_secret</FormLabel>
                <FormControl>
                  <Input
                    id="oauth_token_secret"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter oauth_token_secret"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />);
    },

    Oauth_tokenField: ({ form, data }): React.ReactNode => {
      return (<FormField
            control={form.control}
            name="oauth_token"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="oauth_token">Oauth_token</FormLabel>
                <FormControl>
                  <Input
                    id="oauth_token"
                    type="text"
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter oauth_token"
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
  TypeField,
  ProviderField,
  Refresh_tokenField,
  Access_tokenField,
  Expires_atField,
  Token_typeField,
  ScopeField,
  Id_tokenField,
  Session_stateField,
  Oauth_token_secretField,
  Oauth_tokenField,
  EnableRLSField,
} = accountsFields;