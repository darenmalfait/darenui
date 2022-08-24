import { cx, roundToNearest15 } from '@daren/utils'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { InputProps } from './types'
import { getInputClassName } from './utils'

const TimePicker = React.forwardRef<HTMLInputElement, InputProps>(
  function TimePicker(props, ref) {
    const {
      value: valueProp,
      defaultValue,
      hasError,
      inputSize,
      icon: Icon,
      ...inputProps
    } = props
    const [value, setValue] = React.useState<any>(
      valueProp || defaultValue || roundToNearest15(new Date()).getTime(),
    )

    const className = getInputClassName(props.className, hasError, inputSize)

    function onHourChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const hour = e.target.value
      const date = new Date(value)
      date.setHours(parseInt(hour, 10))
      setValue(date.getTime())
    }

    function onMinuteChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const minute = e.target.value
      const date = new Date(value)
      date.setMinutes(parseInt(minute, 10))
      setValue(date.getTime())
    }

    return (
      <div className="relative shadow-sm">
        <input
          {...(inputProps as JSX.IntrinsicElements['input'])}
          value={value}
          ref={ref}
          type="hidden"
        />
        <div className={cx(className, { 'pr-14': !!Icon })}>
          <div className="flex">
            <div className="flex relative justify-center items-center text-center z-1">
              <div className="hidden group-hover:block absolute -inset-1 group-hover:bg-white rounded-md shadow-md" />
              <select
                name="hours"
                onChange={onHourChange}
                className="z-10 text-xl text-center bg-transparent outline-none appearance-none cursor-pointer"
                defaultValue={new Date(value).getHours().toString()}
              >
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
            </div>
            <span className="mx-2 text-xl">:</span>
            <div className="flex relative justify-center items-center text-center z-1">
              <div className="hidden group-hover:block absolute -inset-1 group-hover:bg-white rounded-md shadow-md" />
              <select
                name="minutes"
                className="z-10 text-xl text-center bg-transparent outline-none appearance-none cursor-pointer"
                onChange={onMinuteChange}
                defaultValue={new Date(value).getMinutes().toString()}
              >
                <option value="0">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
            </div>
          </div>
        </div>
        {Icon && !hasError && (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'flex absolute top-0 right-5 z-10 justify-center items-center p-0 h-full',
              {
                'text-gray-300': !hasError,
                'text-red-500': hasError,
              },
            )}
          />
        )}
        {hasError && (
          <div className="flex absolute top-0 right-5 z-10 justify-center items-center p-0 h-full">
            <ExclamationCircleIcon
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    )
  },
)

export { TimePicker }
