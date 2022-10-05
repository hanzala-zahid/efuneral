import { OwnerDemographicsForm as Component, OwnerDemographicsFormProps } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Owner Demographics Form',
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

const Template: Story<OwnerDemographicsFormProps> = (args) => (
    <Component {...args} />
);

export const OwnerDemographicsForm = Template.bind({});
OwnerDemographicsForm.args = {};
