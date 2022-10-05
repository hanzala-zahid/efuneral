import { PropsWithChildren } from "react";
import { concatenateAriaLabelPieces } from "../../../helpers/aria-label-concatenation";
import { BaseInputProps } from "../base-input-props";

interface RadioInputLabelProps { }

function RadioInputLabel(props: PropsWithChildren<RadioInputLabelProps>) {
  return (
    <label>
      {props.children}
    </label>
  )
}

export interface RadioGroupDisplayValueProps<T> {
  displayValues: {
    ariaLabelSuffix: string,
    display: React.ReactNode,
    value: T
  }[],
}

export interface BaseRadioGroupProps<T> extends
  BaseInputProps<HTMLInputElement>,
  RadioGroupDisplayValueProps<T> { }

export function BaseRadioGroup<T>(props: BaseRadioGroupProps<T>) {
  // Render
  return (
    <>
      {props.displayValues.map(displayValue => (
        <>
          <input
            {...props.htmlInputProps}
            type="radio"
            value={displayValue.value as any}
            key={displayValue.ariaLabelSuffix}
            aria-label={concatenateAriaLabelPieces(props.ariaLabel, displayValue.ariaLabelSuffix)}
            ref={props.innerRef}
          />
          <RadioInputLabel
            key={
              `${concatenateAriaLabelPieces(props.ariaLabel, displayValue.ariaLabelSuffix)} descriptor`
            }
          >
            {displayValue.display}
          </RadioInputLabel>
        </>
      ))}
    </>
  )
}

export default BaseRadioGroup;
