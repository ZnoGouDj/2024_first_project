import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'features/ProfileCard',
    component: ProfileCard,
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
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Gemany,
            lastname: 'admin',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
            avatar
        }
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Loading: Story = {
    args: {
        isLoading: true
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const withError: Story = {
    args: {
        error: 'true'
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];