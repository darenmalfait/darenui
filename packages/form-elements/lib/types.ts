type InputProps = { hasError?: boolean } & (
  | ({ type: 'textarea' } & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']
)

type FieldProps = {
  defaultValue?: string | null
  name: string
  label: string
  className?: string
  error?: string | null
  description?: React.ReactNode
  inputClass?: string
}

export type { InputProps, FieldProps }
