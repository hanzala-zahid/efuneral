import { AddressLineOneFieldProps, AddressLineOneField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Address Line One Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<AddressLineOneFieldProps> = (args) => (
    <Component {...args} />
);

export const AddressLineOneField = Template.bind({});
AddressLineOneField.args = {
    fieldName: 'addressOne'
};
