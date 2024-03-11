import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
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
        
    }
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {
        
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
