// import styles from './base-card-header.module.scss';

export interface BaseCardHeaderProps {
  /**
   * What to show inside of the base card header
   */
  children: React.ReactNode
}

export function BaseCardHeader(props: BaseCardHeaderProps) {
  return (
    <h2
      // className={styles['base-card-header']}
    >
      {props.children}
    </h2>
  );
}

export default BaseCardHeader;
