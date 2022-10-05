import clsx from 'clsx';
// import styles from './base-textbox.module.scss';
import { BaseInputProps } from '../base-input-props';
import { useCallback } from 'react';
import { ChangeHandler } from 'react-hook-form';

export interface TextboxNormalizationProps {
  /**
   * The normalizer to apply to user inputs in the textbox
   */
  normalizer?: (newValue: string) => string
}

export interface BaseTextboxProps extends
  BaseInputProps<HTMLInputElement>,
  TextboxNormalizationProps { }

export function BaseTextbox(props: BaseTextboxProps) {
  // Normalizer application
  const handleChange: ChangeHandler = useCallback((event) => {
    if(typeof event?.target?.value === 'string' && props.normalizer) {
      event.target.value = props.normalizer(event.target.value);
    }
    return props.htmlInputProps.onChange(event);
  }, [props.normalizer])
  // Render
  return (
    <>
      <input
        {...props.htmlInputProps}
        ref={props.innerRef}
        onChange={handleChange}
        // className={clsx(styles['base-textbox'], props.classNames)}
        aria-label={props.ariaLabel}
      />
    </>
  );
}

export default BaseTextbox;
