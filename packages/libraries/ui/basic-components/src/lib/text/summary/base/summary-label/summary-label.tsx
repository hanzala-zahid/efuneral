import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ClassNameOverrideProps } from '../../../../basic-component-props';
// import styles from './summary-label.module.scss';

export interface SummaryLabelProps extends ClassNameOverrideProps{}

export function SummaryLabel(props: PropsWithChildren<SummaryLabelProps>) {
  return (
    <div
      // className={clsx(styles['summary-label'], props.classNames)}
    >
      {props.children}
    </div>
  );
}

export default SummaryLabel;
