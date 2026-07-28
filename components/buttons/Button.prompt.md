Botão de ação da Alavanque — use `variant="accent"` para o CTA principal (ex.: "Solicitar cotação"), `primary` para ações azuis de navegação, `secondary`/`ghost` para ações de menor peso.

```jsx
<Button variant="accent" size="lg" iconRight={<ArrowRight />}>
  Solicitar cotação no WhatsApp
</Button>
<Button variant="secondary">Assistir vídeo</Button>
```

Variantes: primary, accent, secondary, ghost, danger. Tamanhos: sm, md, lg. Props úteis: `block`, `icon`, `iconRight`, `disabled`. Reserve o laranja (`accent`) para uma ação por tela — é o gesto de conversão da marca.
