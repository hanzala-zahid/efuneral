export interface FullFormProps<T> {
    /**
     * The starting/current value of the data
     * When this changes, the form's values will be overwritten with the new values
     */
    values: T,
    /**
     * The function to be called when a valid form is saved
     */
    onSave: (newValues: T) => void,
    /**
     * The prefix to apply to the standard aria labels of the inputs and buttons in the form to ensure uniqueness within a page
     */
    ariaLabelPrefix: string,
    /**
     * Whether the form should display it's summary view or not
     */
    summaryMode: boolean, // TODO - how will we default this? How will the consumer tell if it should start closed?
    /**
     * Whether the form should be disabled or not (default false)
     * Summary mode being false makes this field irrelevant
     */
    disabled?: boolean
    /**
     * The function to be called when the edit button in summary mode is clicked
     */
    onEditClick: () => void
}