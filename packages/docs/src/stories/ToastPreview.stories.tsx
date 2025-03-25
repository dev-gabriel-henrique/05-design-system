import type { Meta, StoryObj } from "@storybook/react";
import { ToastBoxProps, ToastBox } from "@storybook-gabriel-ui/react";

export default {
  title: "Notifications/Toast Preview",
  component: ToastBox,
  argTypes: {
    type: {
      options: ['success', 'error', 'info', 'alert'],
      control: 'inline-radio'
    }
  }
} as Meta<ToastBoxProps>;

export const Success: StoryObj<ToastBoxProps> = {
  args: {
    type: 'success',
    title: 'Agendamento Realizado',
    message: 'Quarta-feira, 23 de Outubro às 16h'
  }
}
export const Error: StoryObj<ToastBoxProps> = {
  args: {
    type: 'error',
    title: 'Ocorreu um erro',
    message: 'Tente novamente'
  }
}
export const Alert: StoryObj<ToastBoxProps> = {
  args: {
    type: 'alert',
    title: 'Campo não preenchido',
    message: 'Verifique o formulário e tente novamente'
  }
}
export const Info: StoryObj<ToastBoxProps> = {
  args: {
    type: 'info',
    title: 'Novo horario de atendimento',
    message: 'Quarta-feira, 23 de Outubro às 16h'
  }
}
