import { PurchasingForFieldProps, PurchasingForField as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields/Purchasing For Field',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<PurchasingForFieldProps> = (args) => (
    <Component {...args} />
);

export const PurchasingForField = Template.bind({});
PurchasingForField.args = {
    fieldName: 'purchasingFor'
};
