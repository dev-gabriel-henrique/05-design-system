import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',

  padding: '$3 $4',
  display: 'flex',
  gap: '$2',
  borderRadius: '$sm',
  '&[data-state="delayed-open"]': { opacity: 1 },
  '&[data-state="closed"]': { opacity: 0 },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
