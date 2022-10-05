import { GeographicStateFieldProps, GeographicStateField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Geographic State Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<GeographicStateFieldProps> = (args) => (
    <Component {...args} />
);

export const GeographicStateField = Template.bind({});
GeographicStateField.args = {
    fieldName: 'state'
};
