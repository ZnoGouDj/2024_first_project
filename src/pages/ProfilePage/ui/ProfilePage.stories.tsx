import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
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
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Gemany,
            lastname: 'admin',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
        }
    }
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Gemany,
            lastname: 'admin',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
        }
    }
})];