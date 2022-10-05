import SummaryContent from '../../base/summary-content/summary-content';
import SummaryLabel from '../../base/summary-label/summary-label';
// import styles from './summary-row.module.scss';

export interface SummaryRowProps {
  /**
   * The sting that describes the summary data
   */
  labelString: string,
  /**
   * The summary data
   */
  content: React.ReactNode
}

export function SummaryRow(props: SummaryRowProps) {
  return (
    <div
      // className={styles['summary-row']}
    >
      <SummaryLabel>{props.labelString}</SummaryLabel>
      <SummaryContent>{props.content}</SummaryContent>
    </div>
  );
}

export default SummaryRow;
