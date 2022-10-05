import { FirstNameFieldProps, FirstNameField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/First Name Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<FirstNameFieldProps> = (args) => (
    <Component {...args} />
);

export const FirstNameField = Template.bind({});
FirstNameField.args = {
    fieldName: 'firstName'
};
