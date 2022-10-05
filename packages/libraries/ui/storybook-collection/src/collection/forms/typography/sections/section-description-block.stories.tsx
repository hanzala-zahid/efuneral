import { SectionDescriptionBlock as Component, SectionDescriptionBlockProps } from '@efuneral/ui/basic-components';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Typography/Sections/Section Description Block',
    argTypes: {
        sectionTitle: {
            type: {
                name: 'string'
            },
        },
        sectionDescription: {
            type: {
                name: 'string'
            },
        },
    },
} as Meta;

const Template: Story<SectionDescriptionBlockProps> = (args) => (
    <Component {...args} />
);

export const SectionDescriptionBlock = Template.bind({});
SectionDescriptionBlock.args = {
    sectionTitle: 'Title',
    sectionDescription: 'Description',
};