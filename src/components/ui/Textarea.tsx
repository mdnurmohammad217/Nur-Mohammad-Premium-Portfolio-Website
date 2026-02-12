import React from 'react';
interface TextareaProps extends
  React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export function Textarea({
  label,
  error,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || props.name;
  return (
    <div className="w-full">
      {label &&
      <label
        htmlFor={textareaId}
        className="block text-sm font-medium text-slate-700 mb-1.5">

          {label}
        </label>
      }
      <textarea
        id={textareaId}
        className={`
          w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400
          transition-all duration-200 min-h-[120px] resize-y
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 hover:border-slate-300'}
          ${className}
        `}
        {...props} />

      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>);

}