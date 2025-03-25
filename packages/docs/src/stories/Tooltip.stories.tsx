import type { Meta, StoryObj } from "@storybook/react";
import {
  CustomTooltip,
  CustomTooltipProps,
  Button,
} from "@storybook-gabriel-ui/react";

export default {
  title: "Tip/Tooltip",
  component: CustomTooltip,
  args: {
    content: "This is a tooltip example",
    side: "top",
    delay: 1000,
    children: <Button>Hover me</Button>
  },
  argTypes: {
    content: { control: "text" },
    side: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    delay: { control: { type: "number" } },
  },
} as Meta<CustomTooltipProps>;

export const Primary: StoryObj<CustomTooltipProps> = {};