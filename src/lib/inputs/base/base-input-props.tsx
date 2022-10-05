import { RefCallback } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameOverrideProps } from "../../basic-component-props";

// Here we remove ref and replace it with innerRef so that react is happy (ref can't be passed to functional component)
export interface BaseInputProps<T> extends ClassNameOverrideProps {
  /**
   * The aria-label to assign to the input
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   */
  ariaLabel: string;
  /**
   * The id that the input's label can use to specify the paired input
   */
  id: string;
  /**
   * The ref for a forms library to attach itself to the input
   */
  innerRef: RefCallback<T>;
  /**
   * Standard html input props (restricted to react-hook-form's shape to avoid confusion)
   * 'ref' is removed at this level, because we can't pass references through react functional components, use innerRef a level above instead
   */
  htmlInputProps: Omit<UseFormRegisterReturn, 'ref'>
}

export interface InputAccesibilityProps {
}
