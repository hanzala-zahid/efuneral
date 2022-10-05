import { PropsWithChildren } from "react";
import { ClassNameOverrideProps } from "../../../../basic-component-props";

export interface SectionDecriptorProps extends ClassNameOverrideProps { }

export function SectionDecriptor(props: PropsWithChildren<SectionDecriptorProps>) {
  return (
    <p>
      {props.children}
    </p>
  );
}

export default SectionDecriptor;
