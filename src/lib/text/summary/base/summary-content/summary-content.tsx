import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ClassNameOverrideProps } from '../../../../basic-component-props';
// import styles from './summary-content.module.scss';

export interface SummaryContentProps extends ClassNameOverrideProps {}

export function SummaryContent(props: PropsWithChildren<SummaryContentProps>) {
  return (
    <div
      // className={clsx(styles['summary-content'], props.classNames)}
    >
      {props.children}
    </div>
  );
}

export default SummaryContent;
