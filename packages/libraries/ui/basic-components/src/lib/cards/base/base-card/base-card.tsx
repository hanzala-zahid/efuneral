// import styles from './base-card.module.scss';

export interface BaseCardProps {
  /**
   * What to show inside of the card
   */
  children: React.ReactNode
}

export function BaseCard(props: BaseCardProps) {
  return (
    <div
      // className={styles['base-card']}
    >
      {props.children}
    </div>
  );
}

export default BaseCard;
