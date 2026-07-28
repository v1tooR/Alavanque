Barra de navegação do site. `brand` recebe o logo; `links` marcam o item ativo com sublinhado laranja; `actions` para os botões (ex.: cotação).

```jsx
<Navbar
  brand={<img src="assets/logo-alavanque.png" alt="Alavanque" style={{height:32}} />}
  links={[{label:'Produtos',active:true},{label:'Como funciona'},{label:'Suporte'}]}
  actions={<Button variant="accent" size="sm">Cotação</Button>}
/>
```
