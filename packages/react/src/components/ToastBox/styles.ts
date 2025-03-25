import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  padding: '$3 $5',
  width: '$88',
  borderRadius: '$sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$gray800',

  variants: {
    type: {
      success: {
        border: '1px solid $ignite300',
        svg: {
          color: '$ignite300',
        },
      },
      error: {
        border: '1px solid $danger',
        svg: {
          color: '$danger',
        },
      },
      alert: {
        border: '1px solid $alert',
        svg: {
          color: '$alert',
        },
      },
      info: {
        border: '1px solid $info',
        svg: {
          color: '$info',
        },
      },
    },
  },

  defaultVariants: {
    type: 'success',
  },
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const CloseButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'center',
})
