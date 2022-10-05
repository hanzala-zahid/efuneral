import { DateOfBirthFieldProps, DateOfBirthField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Date Of Birth Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<DateOfBirthFieldProps> = (args) => (
    <Component {...args} />
);

export const DateOfBirthField = Template.bind({});
DateOfBirthField.args = {
    fieldName: 'dateOfBirth'
};
