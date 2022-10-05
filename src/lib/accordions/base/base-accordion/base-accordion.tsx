export interface BaseAccordionProps {
  titleContent: React.ReactNode,
  accordionContent: React.ReactNode,
  onToggle: () => void,
  isOpen: boolean
}

export function BaseAccordion(props: BaseAccordionProps) {
  return (
    <div>
      <div
        onClick={props.onToggle}
      >
        {props.titleContent}
      </div>
      {props.isOpen && (
        <div>
          {props.accordionContent}
        </div>
      )}
    </div>
  );
}

export default BaseAccordion;
