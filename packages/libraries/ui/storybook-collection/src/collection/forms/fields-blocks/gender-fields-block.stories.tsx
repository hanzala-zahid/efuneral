import { GenderFieldsBlockProps, GenderFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Gender Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<GenderFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const GenderFieldsBlock = Template.bind({});
GenderFieldsBlock.args = {
    
};
