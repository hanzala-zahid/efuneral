import { PropsWithChildren } from 'react';
import { ClassNameOverrideProps } from '../../../basic-component-props';
import { concatenateAriaLabelPieces } from '../../../helpers/aria-label-concatenation';
// import styles from './base-input-error-text.module.scss';

/* eslint-disable-next-line */
export interface BaseInputErrorTextProps extends ClassNameOverrideProps {
  ariaLabelPrefix: string
}

export function BaseInputErrorText(props: PropsWithChildren<BaseInputErrorTextProps>) {
  return (
    <div
      // className={styles['error-text']}
      aria-label={concatenateAriaLabelPieces(props.ariaLabelPrefix, 'error')}
    >
      {props.children}
    </div>
  );
}

export default BaseInputErrorText;
