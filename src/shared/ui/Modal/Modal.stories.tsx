import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. In ornare quam viverra orci sagittis eu volutpat. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Nunc sed id semper risus in. Volutpat odio facilisis mauris sit. Nullam non nisi est sit. Vestibulum lectus mauris ultrices eros in. Nibh nisl condimentum id venenatis a condimentum vitae sapien.'
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. In ornare quam viverra orci sagittis eu volutpat. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Nunc sed id semper risus in. Volutpat odio facilisis mauris sit. Nullam non nisi est sit. Vestibulum lectus mauris ultrices eros in. Nibh nisl condimentum id venenatis a condimentum vitae sapien.'
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
