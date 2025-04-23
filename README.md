
# 💱 Conversor de Moedas (BRL ⇄ USD ⇄ EUR)

Este projeto foi desenvolvido durante um **tutorial introdutório de JavaScript** com o objetivo de colocar em prática os principais conceitos da linguagem. A aplicação permite a conversão de valores entre **Real (BRL)**, **Dólar (USD)** e **Euro (EUR)** em tempo real conforme o usuário digita. 

Durante o tutorial, foram ensinados os conceitos básicos de HTML, CSS e JavaScript, e o projeto original fazia a conversão entre **Dólar e Real**. Posteriormente, **adaptei e ampliei o projeto por conta própria** para incluir também a conversão com **Euro**, demonstrando minha evolução no aprendizado.

---

## 🧠 O que aprendi

### HTML
- Estrutura básica de um documento HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`);
- Inclusão de arquivos externos (CSS e JS);
- Criação de elementos de input e uso de atributos `id` para interação via JS;
- Elementos semânticos como `<header>`, `<main>` e `<footer>`.

### CSS
- Uso de variáveis (`:root`) para definir um esquema de cores;
- Seletores universais e uso de unidades rem para acessibilidade;
- Estilização de inputs e layout com flexbox;
- Criação de um design limpo, responsivo e organizado.

### JavaScript
- Manipulação do DOM com `document.querySelector`;
- Eventos de `keyup` e `blur` para interação em tempo real;
- Conversão de tipos e formatação de números com `Intl.NumberFormat`;
- Criação de funções reutilizáveis para tratamento e conversão de valores;
- Lógica condicional para identificar o tipo de conversão e atualizar os campos adequadamente.

---

## 🚀 Funcionalidades

- 💸 **Conversão instantânea** entre Dólar, Real e Euro ao digitar qualquer valor;
- 🔁 Conversão bidirecional entre as três moedas (USD ⇄ BRL, BRL ⇄ EUR, EUR ⇄ USD);
- 🧹 Formatação automática de valores no padrão brasileiro (`1.000,00`);
- 🎨 Interface limpa e moderna, com responsividade básica.

---

## 🧪 O que fiz além do tutorial

- ✅ **Adição do campo de Euro (€)** no HTML com integração total à lógica de conversão;
- ✅ Cálculo do Euro para Dólar e Real com base em taxas fictícias (`eurDolar` e `eurReal`);
- ✅ Atualização automática de todos os campos relacionados ao alterar qualquer moeda;
- ✅ Aprimoramento na função `convert()` para cobrir todos os caminhos possíveis entre as moedas;
- ✅ Inclusão de tratamento para campos vazios ou com valores inválidos.

---

## 🗂 Estrutura de Arquivos

```
/assets
│   ├── style.css       # Estilos da aplicação
│   └── script.js       # Lógica de conversão de moedas
index.html              # Estrutura da interface
```

---

## 📸 Preview

![Screenshot do conversor de moedas](assets/screenshot.png)  
*(Adicione aqui uma imagem futuramente, caso deseje)*

---

## 📚 Próximos passos no aprendizado

- Adicionar chamadas de API para obter taxas de câmbio em tempo real;
- Implementar validação de valores com feedback ao usuário;
- Aprimorar a responsividade para dispositivos móveis;
- Modularizar o JavaScript em funções reutilizáveis com melhor organização.

---

## 👨‍💻 Autor

Feito com 💙 por **Norival Rodrigues (Neto)**  
Projeto inicial baseado em tutorial, com extensões feitas por conta própria como forma de aprendizado.  
