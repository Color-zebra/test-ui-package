import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
  },
};

export const Large: Story = {
  args: {
    text: "Large",
  },
};
