# Teste Técnico Frontend - Sioux

Implementação das telas do Figma com alta fidelidade visual, semântica HTML correta e uso consistente do Tailwind CSS 4, com renderização no servidor (SSR).

## 🎯 Objetivo

Implementar as telas do Figma com semântica correta, uso consistente do Tailwind e alta fidelidade visual, entregando o projeto em um repositório público e com deploy público usando renderização no servidor (SSR).

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 15 com App Router
- **Estilo**: Tailwind CSS 4
- **Componentes**: Shadcn/ui
- **Ícones**: Lucide React (obrigatório)
- **Linguagem**: TypeScript

## ✅ Requisitos Técnicos Atendidos

- ✅ **SSR Real**: Dados consumidos no servidor da API `https://sioux-test-dev-api.vercel.app/home.json`
- ✅ **Responsividade**: Layout adaptado para mobile e desktop
- ✅ **Tailwind CSS 4**: Estilização com uso consistente
- ✅ **Shadcn/ui**: Componentes utilizados conforme recomendação
- ✅ **Lucide Icons**: Todos os ícones implementados com Lucide
- ✅ **Semântica HTML**: Estrutura semântica correta
- ✅ **Alta Fidelidade**: Visual fiel ao design do Figma

## 🛠 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd teste-3
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute em desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📦 Scripts de Build e Start

### Desenvolvimento
```bash
pnpm dev          # Inicia servidor de desenvolvimento
npm run dev       # Alternativa com npm
```

### Build para Produção
```bash
pnpm build        # Gera build otimizado
npm run build     # Alternativa com npm
```

### Executar em Produção
```bash
pnpm start        # Executa build em produção
npm run start     # Alternativa com npm
```

### Outros Scripts
```bash
pnpm lint         # Executa linting do código
npm run lint      # Alternativa com npm
```

## 🚀 Deploy Público

### URL de Produção
```
[URL do deploy será adicionada aqui]
```

### Plataformas Suportadas
O projeto está configurado para deploy em:
- **Vercel** (recomendado para Next.js)
- **Netlify** 
- **AWS Amplify**

### Deploy Automático
Basta conectar o repositório GitHub à plataforma escolhida para deploy automático.

## � Estrutura do Projeto

```
├── app/
│   ├── globals.css        # Estilos globais Tailwind
│   ├── layout.tsx         # Layout principal com SSR
│   ├── page.tsx           # Página home com consumo da API
│   └── _components/       # Componentes específicos da página
├── components/
│   └── ui/                # Componentes Shadcn/ui
├── lib/
│   └── utils.ts           # Utilitários do projeto
└── public/                # Assets estáticos e imagens
```

## � Consumo de API (SSR)

A aplicação implementa **Server-Side Rendering (SSR)** real, consumindo dados no servidor antes da renderização:

**Endpoint**: `https://sioux-test-dev-api.vercel.app/home.json`

### Estrutura de Dados Consumidos:
```json
{
  "menus": {
    "header": [...],     // Links de navegação do header
    "footer": [...]      // Links do footer
  },
  "hero": {              // Seção principal
    "title": "...",
    "description": "...",
    "ctas": [...]
  },
  "solutions": [...]     // Cards de soluções
}
```

## 📱 Responsividade e Estilização

### Breakpoints Implementados
- **Mobile**: Layout otimizado para dispositivos móveis
- **Desktop**: Layout completo conforme design do Figma
- **Breakpoints**: Tailwind CSS padrão (md: 768px+)

### Tailwind CSS 4
- Uso consistente das classes utilitárias
- Sistema de design responsivo
- Otimização automática de CSS

### Componentes Shadcn/ui
- Componentes acessíveis baseados em Radix UI
- Integração perfeita com Tailwind CSS
- Customização através de CSS variables

## 🎨 Componentes Implementados

### Header
- Logo responsivo
- Navegação adaptável mobile/desktop
- Links dinâmicos da API

### Hero Section
- Background com gradiente
- Tipografia responsiva
- Botões de call-to-action (CTAs)

### Solutions Grid
- Cards responsivos
- Ícones Lucide React
- Layout em grid adaptável

### Footer
- Links organizados
- Informações de copyright
- Layout responsivo

## 🔍 Conformidade com Requisitos

### Tecnologias Obrigatórias ✅
- [x] **Next.js 15**: Framework utilizado
- [x] **Tailwind CSS 4**: Estilização principal
- [x] **Shadcn/ui**: Componentes recomendados
- [x] **Lucide React**: Todos os ícones

### Entrega Obrigatória ✅
- [x] **Repositório Público**: GitHub
- [x] **Deploy Público**: Vercel/Netlify/AWS
- [x] **README Completo**: Instalação, build e start

### Requisitos Técnicos ✅
- [x] **SSR Real**: Consumo da API no servidor
- [x] **Responsividade**: Mobile e desktop
- [x] **Tailwind + Shadcn**: Estilização consistente
- [x] **Lucide Icons**: Ícones obrigatórios
- [x] **Sem outras UI libs**: Apenas Shadcn/ui
