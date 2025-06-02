import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['default', 'wide'],
      },
    },
    withBorder: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: false,
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'default',
    withBorder: false,
    className: '',
  },
};

export const SecondaryWideWithBorder: Story = {
  args: {
    children: 'Secondary Wide Button',
    variant: 'secondary',
    size: 'wide',
    withBorder: true,
    className: '',
  },
};
