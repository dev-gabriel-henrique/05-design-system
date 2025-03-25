import type { Meta, StoryObj } from "@storybook/react";
import {
  ToastProvider,
  ToastProps,
  showToast,
  Button,
} from "@storybook-gabriel-ui/react";

export default {
  title: "Notifications/Toast",
  component: ToastProvider,
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  render: () => (
    <>
      <ToastProvider />
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <Button onClick={() => showToast.success("Agendamento Realizado", "Quarta-feira, 23 de Outubro às 16h")}>
          Sucesso ✅
        </Button>
        <Button onClick={() => showToast.error("Ocorreu um erro!", "Tente novamente")}>
          Erro ❌
        </Button>
        <Button onClick={() => showToast.alert("Campo não preenchido", "Verifique o formulário e tente novamente")}>
          Alerta ⚠️
        </Button>
        <Button onClick={() => showToast.info("Novo horario de atendimento", "Quarta-feira, 23 de Outubro às 16h")}>
          Informação ℹ️
        </Button>
      </div>
    </>
  ),
};
