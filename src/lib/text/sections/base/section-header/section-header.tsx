import { PropsWithChildren } from "react";
import { ClassNameOverrideProps } from "../../../../basic-component-props";

export interface SectionHeaderProps extends ClassNameOverrideProps { }

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  return (
    <h2>
      {props.children}
    </h2>
  );
}

export default SectionHeader;
