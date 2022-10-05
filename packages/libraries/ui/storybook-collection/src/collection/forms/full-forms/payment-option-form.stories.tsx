import { PaymentOptionFormProps, PaymentOptionForm as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Payment Option Form',
    argTypes: {
        onSave: {
            action: 'Form Saved',
            table: {
                disable: true
            }
        },
        onEditClick: {
            action: 'Edit Clicked',
            table: {
                disable: true
            }
        },
    },
} as Meta;

const Template: Story<PaymentOptionFormProps> = (args) => (
    <Component {...args} />
);

export const PaymentOptionForm = Template.bind({});
PaymentOptionForm.args = {};
