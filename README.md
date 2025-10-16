# 🔋 Enersafe Landing Page

Landing page moderna e responsiva desenvolvida para a Enersafe, construída com Next.js 15, React 19, TypeScript e Tailwind CSS v4.

## 📋 Sobre o Projeto

Este projeto é uma aplicação web desenvolvida com as tecnologias mais modernas do ecossistema React/Next.js, utilizando o framework shadcn/ui para componentes de interface e Tailwind CSS v4 para estilização.

### 🚀 Tecnologias Utilizadas

- **Next.js 15.5.4** - Framework React com App Router
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Tailwind CSS v4.1.9** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes reutilizáveis
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Ícones modernos
- **Vercel Analytics** - Analytics integrado

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** versão 18.17 ou superior ([Download aqui](https://nodejs.org/))
- **npm** (vem com Node.js) OU **pnpm** (recomendado) OU **yarn**

### Verificar instalação do Node.js

\`\`\`bash
node --version
\`\`\`

Deve retornar algo como: `v18.17.0` ou superior

### Instalar pnpm (Recomendado)

\`\`\`bash
npm install -g pnpm
\`\`\`

Verificar instalação:

\`\`\`bash
pnpm --version
\`\`\`

## 🔧 Instalação

Siga estes passos para instalar e executar o projeto em sua máquina:

### 1. Clone o repositório

\`\`\`bash
git clone <URL_DO_SEU_REPOSITORIO>
cd enersafe-landing-page
\`\`\`

**OU** se você baixou o ZIP do projeto:

\`\`\`bash
# Extraia o arquivo ZIP
# Navegue até a pasta do projeto
cd enersafe-landing-page
\`\`\`

### 2. Instale as dependências

Escolha um dos gerenciadores de pacotes abaixo:

#### Usando pnpm (Recomendado - mais rápido)

\`\`\`bash
pnpm install
\`\`\`

#### Usando npm

\`\`\`bash
npm install
\`\`\`

#### Usando yarn

\`\`\`bash
yarn install
\`\`\`

### 3. Execute o projeto em modo de desenvolvimento

#### Com pnpm:

\`\`\`bash
pnpm dev
\`\`\`

#### Com npm:

\`\`\`bash
npm run dev
\`\`\`

#### Com yarn:

\`\`\`bash
yarn dev
\`\`\`

### 4. Acesse no navegador

Abra seu navegador e acesse:

\`\`\`
http://localhost:3000
\`\`\`

O projeto estará rodando e qualquer alteração nos arquivos será refletida automaticamente (hot reload).

## 📁 Estrutura do Projeto

\`\`\`
enersafe-landing-page/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout principal da aplicação
│   ├── page.tsx                 # Página inicial
│   └── globals.css              # Estilos globais e variáveis CSS
├── components/                   # Componentes React
│   ├── ui/                      # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...                  # Outros componentes
│   └── theme-provider.tsx       # Provider de tema (dark/light)
├── hooks/                        # Custom React Hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                          # Utilitários e funções auxiliares
│   └── utils.ts                 # Função cn() para classes CSS
├── public/                       # Arquivos estáticos
│   ├── placeholder.svg
│   └── ...
├── .gitignore                    # Arquivos ignorados pelo Git
├── components.json               # Configuração shadcn/ui
├── next.config.mjs              # Configuração do Next.js
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript
├── postcss.config.mjs           # Configuração PostCSS
└── README.md                    # Este arquivo
\`\`\`

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar:

### `dev` - Modo de desenvolvimento

\`\`\`bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
\`\`\`

Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000).
A página recarrega automaticamente quando você faz alterações.

### `build` - Build de produção

\`\`\`bash
pnpm build
# ou
npm run build
# ou
yarn build
\`\`\`

Cria uma versão otimizada do aplicativo para produção na pasta `.next`.

### `start` - Servidor de produção

\`\`\`bash
pnpm start
# ou
npm run start
# ou
yarn start
\`\`\`

Inicia o servidor de produção. **Você deve executar `build` antes deste comando.**

### `lint` - Verificação de código

\`\`\`bash
pnpm lint
# ou
npm run lint
# ou
yarn lint
\`\`\`

Executa o ESLint para verificar problemas no código.

## 🎨 Personalização

### Cores e Tema

As cores do tema estão definidas em `app/globals.css`. Você pode personalizar:

- Cores do tema claro e escuro
- Raio de borda dos componentes
- Cores de gráficos
- E muito mais

### Componentes

Todos os componentes da UI estão em `components/ui/`. Eles são baseados no shadcn/ui e podem ser personalizados conforme necessário.

### Fontes

As fontes estão configuradas em `app/layout.tsx`:
- **Geist** - Fonte sans-serif principal
- **Geist Mono** - Fonte monoespaçada

## 🌐 Deploy

### Deploy na Vercel (Recomendado)

A maneira mais fácil de fazer deploy é usar a [Vercel](https://vercel.com):

1. Crie uma conta na Vercel (se ainda não tiver)
2. Conecte seu repositório GitHub/GitLab/Bitbucket
3. A Vercel detectará automaticamente que é um projeto Next.js
4. Clique em "Deploy"

**OU** use o botão de deploy direto do v0:

- Clique no botão "Publish" no canto superior direito da interface do v0

### Deploy Manual

\`\`\`bash
# 1. Faça o build do projeto
pnpm build

# 2. O projeto estará pronto na pasta .next
# 3. Faça upload para seu servidor
# 4. Execute o comando start
pnpm start
\`\`\`

## 🐛 Solução de Problemas

### Erro: "Cannot find module"

\`\`\`bash
# Limpe o cache e reinstale as dependências
rm -rf node_modules
rm -rf .next
rm pnpm-lock.yaml  # ou package-lock.json ou yarn.lock
pnpm install
\`\`\`

### Erro: "Port 3000 is already in use"

\`\`\`bash
# Mate o processo na porta 3000
# No Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# No Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Ou use outra porta:
pnpm dev -p 3001
\`\`\`

### Erro de TypeScript

\`\`\`bash
# Verifique se o TypeScript está instalado
pnpm add -D typescript @types/react @types/node

# Reinicie o servidor de desenvolvimento
\`\`\`

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React](https://react.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação shadcn/ui](https://ui.shadcn.com)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)

## 📄 Licença

Este projeto é privado e proprietário da Enersafe.

## 👥 Suporte

Para suporte e dúvidas:
- Abra uma issue no repositório
- Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido com ❤️ usando v0.app**
