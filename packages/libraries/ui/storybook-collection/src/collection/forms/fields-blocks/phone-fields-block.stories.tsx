import { PhoneFieldsBlockProps, PhoneFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Phone Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<PhoneFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const PhoneFieldsBlock = Template.bind({});
PhoneFieldsBlock.args = {
    
};
