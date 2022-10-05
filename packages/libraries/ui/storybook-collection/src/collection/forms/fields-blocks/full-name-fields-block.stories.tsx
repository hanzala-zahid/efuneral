import { FullNameFieldsBlockProps, FullNameFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Full Name Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<FullNameFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const FullNameFieldsBlock = Template.bind({});
FullNameFieldsBlock.args = {
    
};
