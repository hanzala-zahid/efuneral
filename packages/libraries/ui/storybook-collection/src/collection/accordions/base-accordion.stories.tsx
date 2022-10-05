import { BaseAccordionProps, BaseAccordion as Component } from '@efuneral/ui/basic-components';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Accordions/Base Accordion',
    argTypes: {
        onToggle: {
            action: 'Accordion Toggled',
            table: {
                disable: true
            }
        },
    },
} as Meta;

const Template: Story<BaseAccordionProps> = (args) => (
    <Component {...args} />
);

export const BaseAccordion = Template.bind({});
BaseAccordion.args = {
    titleContent: 'Title',
    accordionContent: 'Content',
    isOpen: false,
};
