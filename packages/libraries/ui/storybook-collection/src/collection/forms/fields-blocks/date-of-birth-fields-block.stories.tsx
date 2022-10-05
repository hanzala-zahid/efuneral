import { DateOfBirthFieldsBlockProps, DateOfBirthFieldsBlock as Component } from '@efuneral/ui/forms';
import { Story, Meta } from '@storybook/react';
import { singleFieldStorybookDecorator } from '../helpers/single-field-storybook-decorator';

export default {
    component: Component,
    title: 'Forms/Fields Blocks/Date Of Birth Fields Block',
    argTypes: {},
    decorators: [
        singleFieldStorybookDecorator
    ]
} as Meta;

const Template: Story<DateOfBirthFieldsBlockProps> = (args) => (
    <Component {...args} />
);

export const DateOfBirthFieldsBlock = Template.bind({});
DateOfBirthFieldsBlock.args = {
    
};
