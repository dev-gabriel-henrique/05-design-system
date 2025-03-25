import { X } from 'phosphor-react'
import { ToastContainer as ToastifyContainer } from 'react-toastify'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { colors } from '@storybook-gabriel-ui/tokens'
import { CloseButton, ToastContainer, ToastContent } from './styles'

export interface ToastBoxProps
  extends ComponentProps<typeof ToastifyContainer & typeof ToastContainer> {
  title: string
  message: string
  onClose: () => void
}

export function ToastBox({ type, title, message, onClose }: ToastBoxProps) {
  return (
    <ToastContainer type={type}>
      <ToastContent>
        <Heading size="sm" as="h1">
          {title}
        </Heading>
        <Text css={{ color: colors.gray200 }} size="sm">
          {message}
        </Text>
      </ToastContent>

      <CloseButton onClick={onClose}>
        <X size={18} />
      </CloseButton>
    </ToastContainer>
  )
}
