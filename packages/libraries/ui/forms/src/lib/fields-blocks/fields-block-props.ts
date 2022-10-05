export interface FieldsBlockProps {
    /**
     * The prefix to add on the standard aria labels to ensure label unique-ness on a page
     */
    ariaLabelPrefix: string,
    /**
     * Whether or not the field block is in summary mode
     */
    summaryMode: boolean,
    /**
     * The prefix to add to the react-hook-form fields
     * (If you prefix with "nested" then submitted form fields will be on the property object "nested")
     * react-hook-form controls how this nesting and flattening happens
     */
    fieldNamePrefix?: string
}