import { MiddleNameFieldProps, MiddleNameField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Middle Name Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<MiddleNameFieldProps> = (args) => (
    <Component {...args} />
);

export const MiddleNameField = Template.bind({});
MiddleNameField.args = {
    fieldName: 'middleName'
};
