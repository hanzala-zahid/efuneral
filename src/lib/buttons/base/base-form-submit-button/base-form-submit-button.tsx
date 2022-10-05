import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ClassNameOverrideProps } from '../../../basic-component-props';
// import styles from './base-form-submit-button.module.scss';

export interface BaseFormSubmitButtonProps extends ClassNameOverrideProps {
   /**
    * The aria-label to assign to the input
    * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
    */
   ariaLabel: string,
}

export function BaseFormSubmitButton(props: PropsWithChildren<BaseFormSubmitButtonProps>) {
  return (
    <input
      aria-label={props.ariaLabel}
      // className={clsx(styles['base-form-submit-button'], props.classNames)}
      type="submit"
    >
      {props.children}
    </input>
  );
}

export default BaseFormSubmitButton;
