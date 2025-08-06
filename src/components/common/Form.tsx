import {
  useForm,
  type SubmitHandler,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface FieldConfig<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

interface ReusableFormProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  fields: FieldConfig<T>[];
  submitText: string;
  schema: yup.ObjectSchema<any>;
}

export function ReusableForm<T extends FieldValues>({
  onSubmit,
  fields,
  submitText,
  schema,
}: ReusableFormProps<T>) {
  const methods = useForm<T>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "var(--color-card)",
          color: "var(--color-foreground)",
          padding: "1.5rem",
          borderRadius: "var(--radius-md)",
          border: `1px solid var(--color-border)`,
        }}
      >
        {fields.map(({ name, label, type = "text", placeholder ,autoComplete }) => (
          <FormField
            key={name}
            control={methods.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: "var(--color-primary-foreground)" }}>
                  {label}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}

                    style={{
                      backgroundColor: "var(--color-input)",
                      borderRadius: "var(--radius-sm)",
                      border: `1px solid var(--color-border)`,
                      color: "var(--color-foreground)",
                      padding: "0.5rem 0.75rem",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-primary-foreground)",
            borderRadius: "var(--radius-md)",
            padding: "0.75rem",
            border: "none",
            cursor: "pointer",
          }}
          disabled={!methods.formState.isValid}
        >
          {submitText}
        </Button>
      </form>
    </Form>
  );
}
