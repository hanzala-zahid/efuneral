import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ClassNameOverrideProps } from '../../../basic-component-props';
// import styles from './base-input-label.module.scss';

export interface BaseInputLabelProps extends ClassNameOverrideProps {
  /**
   * The id handed to the input component
   * Used to map label to input
   */
  inputId: string
}

export function BaseInputLabel(props: PropsWithChildren<BaseInputLabelProps>) {
  return (
    <label
      htmlFor={props.inputId}
      // className={clsx(styles['base-input-label'], props.classNames)}
    >
      {props.children}
    </label>
  );
}

export default BaseInputLabel;
