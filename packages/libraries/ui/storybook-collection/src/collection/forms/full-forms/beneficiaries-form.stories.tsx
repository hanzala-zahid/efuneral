import { BeneficiariesFormProps, BeneficiariesForm as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Beneficiaries Form',
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

const Template: Story<BeneficiariesFormProps> = (args) => (
    <Component {...args} />
);

export const BeneficiariesForm = Template.bind({});
BeneficiariesForm.args = {};
