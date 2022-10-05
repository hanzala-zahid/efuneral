import clsx from 'clsx';
import { ClassNameOverrideProps } from '../../../basic-component-props';
// import styles from './base-button.module.scss';

export interface AppCustomizableButtonProps {
  /**
   * Handles the button being clicked
   */
  onClick: () => void,
  /**
   * Disables or enables the button
   */
  disabled?: boolean,
}

export interface BaseButtonProps extends AppCustomizableButtonProps, ClassNameOverrideProps {
  /**
   * What to show in the button
   */
  children: React.ReactNode,
  /**
   * The aria-label to assign to the input
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   */
  ariaLabel: string,
}

export function BaseButton(props: BaseButtonProps) {
  return (
    <button
      // className={clsx(styles['button'], props.classNames)}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
}