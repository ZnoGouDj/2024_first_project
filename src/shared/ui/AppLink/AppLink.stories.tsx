import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <MemoryRouter><Story/></MemoryRouter>
            </div>
        ),
    ],
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];