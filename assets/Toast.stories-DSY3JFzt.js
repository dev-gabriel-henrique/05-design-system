import{j as o}from"./index-OUonNg1O.js";import{c as i,d as e,s as r}from"./index-ChOSiKRX.js";import"./index-CgCoV-L-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CbxeZXnq.js";const p={title:"Notifications/Toast",component:i},n={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(i,{}),o.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[o.jsx(e,{onClick:()=>r.success("Agendamento Realizado","Quarta-feira, 23 de Outubro às 16h"),children:"Sucesso ✅"}),o.jsx(e,{onClick:()=>r.error("Ocorreu um erro!","Tente novamente"),children:"Erro ❌"}),o.jsx(e,{onClick:()=>r.alert("Campo não preenchido","Verifique o formulário e tente novamente"),children:"Alerta ⚠️"}),o.jsx(e,{onClick:()=>r.info("Novo horario de atendimento","Quarta-feira, 23 de Outubro às 16h"),children:"Informação ℹ️"})]})]})};var t,a,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <>
      <ToastProvider />
      <div style={{
      display: "flex",
      gap: "8px",
      marginTop: "16px"
    }}>
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["Primary"];export{n as Primary,h as __namedExportsOrder,p as default};
