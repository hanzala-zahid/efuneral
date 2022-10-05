import { EmailFieldProps, EmailField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Email Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<EmailFieldProps> = (args) => (
    <Component {...args} />
);

export const EmailField = Template.bind({});
EmailField.args = {
    fieldName: 'email'
};
