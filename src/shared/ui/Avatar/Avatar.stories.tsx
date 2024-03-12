import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import AvatarImg from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
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
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg
    },
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];