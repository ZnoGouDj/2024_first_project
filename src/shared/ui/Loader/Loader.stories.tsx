import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
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
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];