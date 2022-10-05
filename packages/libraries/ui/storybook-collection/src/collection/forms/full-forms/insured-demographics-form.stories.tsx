import { InsuredDemographicsFormProps, InsuredDemographicsForm as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';

export default {
    component: Component,
    title: 'Forms/Full Forms/Insured Demographics Form',
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

const Template: Story<InsuredDemographicsFormProps> = (args) => (
    <Component {...args} />
);

export const InsuredDemographicsForm = Template.bind({});
InsuredDemographicsForm.args = {};
