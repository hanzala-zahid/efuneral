import SectionDecriptor from "../../base/section-decriptor/section-decriptor";
import SectionHeader from "../../base/section-header/section-header";

/* eslint-disable-next-line */
export interface SectionDescriptionBlockProps {
  sectionTitle: string,
  sectionDescription: React.ReactNode
}

export function SectionDescriptionBlock(props: SectionDescriptionBlockProps) {
  return (
    <div>
      <SectionHeader>
        {props.sectionTitle}
      </SectionHeader>
      <SectionDecriptor>
        {props.sectionDescription}
      </SectionDecriptor>
    </div>
  );
}

export default SectionDescriptionBlock;
