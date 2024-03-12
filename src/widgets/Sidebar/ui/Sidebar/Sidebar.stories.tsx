import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Sidebar from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
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
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {authData: {}}
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {authData: {}}
})];

export const NoAuth: Story = {
    args: {},
};
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {}
})];