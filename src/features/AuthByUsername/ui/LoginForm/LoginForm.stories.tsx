import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
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
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
        
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' }
})];

export const withError: Story = {
    args: {
        
    },
};
withError.decorators = [ThemeDecorator(Theme.LIGHT)];
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' }
})];

export const Loading: Story = {
    args: {
        
    },
};
Loading.decorators = [ThemeDecorator(Theme.LIGHT)];
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})];


