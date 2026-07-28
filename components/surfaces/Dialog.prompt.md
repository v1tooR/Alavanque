Modal centralizado. Controle com estado `open`; clique no backdrop ou passe `onClose`.

```jsx
const [open, setOpen] = React.useState(false);
<Dialog open={open} onClose={() => setOpen(false)} title="Solicitar cotação"
  actions={<><Button variant="ghost" onClick={()=>setOpen(false)}>Cancelar</Button><Button variant="accent">Enviar</Button></>}>
  Deixe seu WhatsApp que retornamos com a cotação.
</Dialog>
```
