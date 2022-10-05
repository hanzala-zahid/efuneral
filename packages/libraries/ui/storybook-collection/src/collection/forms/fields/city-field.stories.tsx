import { CityFieldProps, CityField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/City Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<CityFieldProps> = (args) => (
    <Component {...args} />
);

export const CityField = Template.bind({});
CityField.args = {
    fieldName: 'city'
};
