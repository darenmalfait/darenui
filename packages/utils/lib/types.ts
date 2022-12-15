type Dict<T = any> = Record<string, T>

type CSSMap = Dict<{value: string; var: string; varRef: string}>

type WithCSSVar<T> = T & {
  cssVars: Dict
  cssMap: CSSMap
}

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

export type {Dict, CSSMap, WithCSSVar, DeepPartial, ExtractProps}
