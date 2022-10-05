import { EmailFieldsBlockProps, EmailFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Email Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<EmailFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const EmailFieldsBlock = Template.bind({});
EmailFieldsBlock.args = {
    
};
