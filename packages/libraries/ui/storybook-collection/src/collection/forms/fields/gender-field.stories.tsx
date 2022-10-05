import { GenderFieldProps, GenderField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Gender Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<GenderFieldProps> = (args) => (
    <Component {...args} />
);

export const GenderField = Template.bind({});
GenderField.args = {
    fieldName: 'gender'
};
