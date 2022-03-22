import * as React from 'react'

import { CodeBlock } from '../lib'

export default {
  title: 'Code Block',
  component: CodeBlock,
  argTypes: {
    showLineNumbers: {
      defaultValue: false,
      control: 'boolean',
    },
    language: {
      defaultValue: 'tsx',
      control: 'text',
    },
  },
}

export function Default({ showLineNumbers, language }: any) {
  return (
    <div>
      <CodeBlock
        showLineNumbers={showLineNumbers}
        language={language}
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

export function OneLine({ showLineNumbers, language }: any) {
  return (
    <div>
      <CodeBlock
        showLineNumbers={showLineNumbers}
        language={language}
        code={`import * as React from 'react'`}
      />
    </div>
  )
}
