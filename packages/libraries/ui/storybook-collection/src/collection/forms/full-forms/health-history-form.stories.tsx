import { HealthHistoryFormProps, HealthHistoryForm as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Health History Form',
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

const Template: Story<HealthHistoryFormProps> = (args) => (
    <Component {...args} />
);

export const HealthHistoryForm = Template.bind({});
HealthHistoryForm.args = {};
