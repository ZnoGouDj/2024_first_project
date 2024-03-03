import type { Meta, StoryObj } from '@storybook/react';
import Text, { TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
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
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description lorem ipsum'
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description lorem ipsum',
        theme: TextTheme.ERROR
    },
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};
onlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyText: Story = {
    args: {
        text: 'Description lorem ipsum'
    },
};
onlyText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description lorem ipsum'
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
    args: {
        text: 'Description lorem ipsum'
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];