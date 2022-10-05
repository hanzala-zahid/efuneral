import { IrrevocabilityFormProps, IrrevocabilityForm as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Irrevocability Form',
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

const Template: Story<IrrevocabilityFormProps> = (args) => (
    <Component {...args} />
);

export const IrrevocabilityForm = Template.bind({});
IrrevocabilityForm.args = {};
