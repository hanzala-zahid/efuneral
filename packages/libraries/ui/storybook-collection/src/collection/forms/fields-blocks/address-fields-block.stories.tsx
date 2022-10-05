import { AddressFieldsBlockProps, AddressFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Address Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<AddressFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const AddressFieldsBlock = Template.bind({});
AddressFieldsBlock.args = {
    
};
