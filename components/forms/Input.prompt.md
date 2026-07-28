Campos de formulário nativos com rótulo, dica e estado de erro. Use em formulários de cotação e contato.

```jsx
<Input label="Nome" placeholder="Seu nome" required />
<Input label="E-mail" type="email" error="E-mail inválido" />
<Select label="Produto de interesse" placeholder="Selecione" options={["Pão de queijo","Nhoque","Biscoitos"]} />
```

`Input` e `Select` compartilham o mesmo esqueleto (`label`, `hint`, `error`, `required`). Foco usa anel azul; erro usa borda e anel vermelhos.
