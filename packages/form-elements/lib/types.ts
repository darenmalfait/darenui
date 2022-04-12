import React from 'react'

type InputProps = { hasError?: boolean; icon?: React.ElementType } & (
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
  icon?: React.ElementType
}

export type { InputProps, FieldProps }
