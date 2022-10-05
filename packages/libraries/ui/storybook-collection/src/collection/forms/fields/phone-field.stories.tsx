import { PhoneFieldProps, PhoneField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Phone Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<PhoneFieldProps> = (args) => (
    <Component {...args} />
);

export const PhoneField = Template.bind({});
PhoneField.args = {
    fieldName: 'phone'
};
