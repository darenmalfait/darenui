import { LiveContext } from 'react-live'

function Preview() {
  return (
    <LiveContext.Consumer>
      {/* @ts-ignore */}
      {({ element: Element }) => {
        return (
          <div className="flex h-full flex-col rounded-t-lg border border-b-0 border-neutral-200 shadow-sm dark:border-neutral-700">
            <div className="flex h-8 items-center rounded-t-lg bg-neutral-200 pl-2 dark:bg-neutral-700">
              <div className="text-smm">Output</div>
            </div>
            <div className="bg-base h-full flex-1">
              {Element ? <Element /> : null}
            </div>
          </div>
        )
      }}
    </LiveContext.Consumer>
  )
}
export { Preview }
