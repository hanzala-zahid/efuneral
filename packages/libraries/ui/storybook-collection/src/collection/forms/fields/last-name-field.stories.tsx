import { LastNameFieldProps, LastNameField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Last Name Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<LastNameFieldProps> = (args) => (
    <Component {...args} />
);

export const LastNameField = Template.bind({});
LastNameField.args = {
    fieldName: 'lastName'
};
