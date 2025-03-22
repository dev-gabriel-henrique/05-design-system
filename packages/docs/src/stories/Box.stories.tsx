import { Box, BoxProps, Text } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}