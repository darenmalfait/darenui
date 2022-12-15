import {LiveContext} from 'react-live'

function Preview() {
  return (
    <LiveContext.Consumer>
      {/* @ts-expect-error because of the type of element is not defined */}
      {({element: Element}) => {
        return (
          <div className="flex h-full flex-col shadow-sm ">
            <div className="flex h-8 items-center rounded-t-lg pl-2 bg-secondary">
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
export {Preview}
