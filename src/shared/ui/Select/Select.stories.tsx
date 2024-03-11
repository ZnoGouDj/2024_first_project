import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
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
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            {value: '123', content: 'Первый пункт'},
            {value: '1234', content: 'Второй пункт'}
        ]
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
