import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <MemoryRouter initialEntries={['/']}><Story /></MemoryRouter>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    
})];

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    
})];

export const AuthNavbar: Story = {
    args: {},
};

AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} }
})];