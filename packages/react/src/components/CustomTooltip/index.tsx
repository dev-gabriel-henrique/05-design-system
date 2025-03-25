import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipContainer, TooltipArrow } from './styles'
import { Text } from '../Text'

export interface CustomTooltipProps
  extends ComponentProps<typeof TooltipContainer> {
  delay?: number
}

export function CustomTooltip({
  children,
  content,
  side = 'top',
  delay = 200,
}: CustomTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={delay}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContainer side={side}>
            <Text>{content}</Text>
            <TooltipArrow />
          </TooltipContainer>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
