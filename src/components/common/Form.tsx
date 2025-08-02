import React from 'react';
import { cn } from '@/lib/utils';

interface FormField {
  name: string;
  type: string;
  placeholder: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ fields, onSubmit, buttonLabel, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'space-y-4 p-6',
        'bg-[--color-card]',
        'text-[--color-card-foreground]',
        'rounded-[--radius-md]',
        className
      )}
    >
      {fields.map((field) => (
        <input
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          required
          className={cn(
            'w-full px-4 py-2',
            'bg-[--color-input]',
            'text-[--color-foreground]',
            'border border-[--color-border]',
            'rounded-[--radius-sm]',
            'focus:outline-none focus:ring-2 focus:ring-[--color-ring]'
          )}
        />
      ))}

      <button
        type="submit"
        className={cn(
          'w-full px-4 py-2 font-medium',
          'bg-[--color-primary]',
          'text-[--color-primary-foreground]',
          'rounded-[--radius-md]',
          'hover:animate-pulse'
        )}
      >
        {buttonLabel}
      </button>
    </form>
  );
};
