import clsx from 'clsx';
import { concatenateAriaLabelPieces } from '../../../helpers/aria-label-concatenation';
import { BaseInputProps } from "../base-input-props";
// import styles from './base-dropdown.module.scss';

export interface DropdownDisplayValueProps<T> {
  displayValues: {
    ariaLabel: string,
    display: React.ReactNode,
    value: T
  }[],
}

export interface BaseDropdownProps<T> extends
  BaseInputProps<HTMLSelectElement>,
  DropdownDisplayValueProps<T> { }

export function BaseDropdown<T>(props: BaseDropdownProps<T>) {
  // Render
  return (
    <select
      {...props.htmlInputProps}
      ref={props.innerRef}
      // className={clsx(styles['base-dropdown'], props.classNames)}
      aria-label={props.ariaLabel}
    >
      {/* An empty hidden selected default option */}
      <option
        hidden
        value={undefined}
      />
      {/* A mapping of the available options to option tags */}
      {props.displayValues.map(displayValue => (
        <option
          // className={styles['base-dropdown-option']}
          value={displayValue.value as any}
          key={displayValue.ariaLabel}
          aria-label={concatenateAriaLabelPieces(props.ariaLabel, displayValue.ariaLabel)}
        >
          {displayValue.display}
        </option>
      ))}
    </select>
  );
}

export default BaseDropdown;
