import * as React from 'react'

import { CodeBlock } from '../lib'

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function FullBlock() {
  return (
    <div>
      <CodeBlock
        showLineNumbers={true}
        language="tsx"
        showLanguage={true}
        code={`import * as React from 'react'

const CountContext = React.createContext()

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(\`Unhandled action type: \${action.type}\`)
    }
  }
}

function CountProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  // NOTE: you *might* need to memoize this value
  const value = {state, dispatch}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export {CountProvider}`}
      />
    </div>
  )
}

export function OneLine() {
  return (
    <div>
      <CodeBlock code={`import * as React from 'react'`} />
    </div>
  )
}
