import { AddressLineTwoFieldProps, AddressLineTwoField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Address Line Two Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<AddressLineTwoFieldProps> = (args) => (
    <Component {...args} />
);

export const AddressLineTwoField = Template.bind({});
AddressLineTwoField.args = {
    fieldName: 'addressTwo'
};
