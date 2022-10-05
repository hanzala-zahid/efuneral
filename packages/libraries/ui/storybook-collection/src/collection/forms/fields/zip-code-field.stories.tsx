import { ZipCodeFieldProps, ZipCodeField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Zip Code Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<ZipCodeFieldProps> = (args) => (
    <Component {...args} />
);

export const ZipCodeField = Template.bind({});
ZipCodeField.args = {
    fieldName: 'zip'
};
