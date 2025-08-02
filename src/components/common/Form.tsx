import React from "react";
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
import { useForm } from "react-hook-form";

interface ReusableFormProps {
  onSubmit: (data: any) => void;
  fields: {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    validation?: object;
  }[];
  submitText: string;
}

export function ReusableForm({ onSubmit, fields, submitText }: ReusableFormProps) {
  const form = useForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
        {fields.map(({ name, label, type = "text", placeholder, validation }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            rules={validation}
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
          disabled={!form.formState.isValid}
        >
          {submitText}
        </Button>
      </form>
    </Form>
  );
}