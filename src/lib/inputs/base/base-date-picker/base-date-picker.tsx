import { useRef } from 'react';
import { BaseInputProps } from '../base-input-props';
// import styles from './base-date-picker.module.scss';

/*
  TODO - I can almost guarantee this won't work for all browsers (EFIT-2235)
*/

export interface BaseDatePickerProps extends
  BaseInputProps<HTMLInputElement> { }

// The onChange of this date picker should always be a string of shape 'YYYY-MM-DD' in accordance with RFC 3339
export function BaseDatePicker(props: BaseDatePickerProps) {
  // Initialize the value appropriately (using RFC 3339 instead of date object)
  const myRef = useRef<HTMLInputElement | null>();
  // Render
  return (
    <input
      {...props.htmlInputProps}
      type="date"
      // className={clsx(styles['base-date-picker'], props.classNames)}
      ref={(element) => {
        props.innerRef(element);
        myRef.current = element;
      }}
      aria-label={props.ariaLabel}
    />
  );
}

export default BaseDatePicker;

/**
 * Converts a date object into a string like YYYY-MM-DD
 * https://datatracker.ietf.org/doc/html/rfc3339#page-8
 * @param date The date to convert
 */
export const convertDateToRFC3339FullDate = (date: Date) => {
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;
  let year = `${date.getFullYear()}`;
  while (day.length < 2) {
    day = `0${day}`;
  }
  while (month.length < 2) {
    month = `0${month}`;
  }
  while (year.length < 4) {
    year = `0${year}`;
  }
  return `${year}-${month}-${day}`
}
