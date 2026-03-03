<p align="center">
    <img src="https://i.imgur.com/iNPeu7d.png" width="250px">
</p>

<h1 align="center">SAIO eCommerce</h1>

Aplicação desenvolvida como teste técnico para a vaga de Desenvolvedor Front-End da empresa [Saio](https://saio.app/).

## 🛠️ Tecnologias utilizadas

[![Stack](https://skillicons.dev/icons?i=nextjs,react,tailwind,ts)](https://skillicons.dev)

## 📋 Setup do Projeto

> [!NOTE]
> **Pré-requisitos:**
>
> - Node 20+
> - pnpm para gerenciamento de pacotes

Para rodar o projeto localmente, considere os passos a seguir:

#### 1. Clone o repositório:

```bash
git clone https://github.com/kwojtyla/saio.git
```

#### 2. Navegue até o diretório do projeto:

```bash
cd saio
```

#### 3. Instale as dependências necessárias:

```bash
pnpm install
```

#### 4. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto e defina a URL da API:

```env
API_URL=https://sua-api-aqui.com
```

#### 5. Inicie o servidor local:

```bash
pnpm dev
```

#### 6. Acesse o servidor local:

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para acessar o projeto.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma:

```
src/
├── api/                # Funções de integração com a API externa
├── app/                # Rotas e páginas (Next.js App Router)
│   └── ofertas/        # Página de listagem de ofertas
├── assets/
│   └── icons/          # Ícones SVG como componentes React
├── components/
│   ├── layout/         # Componentes estruturais (Header, Footer)
│   └── ui/             # Componentes globais reutilizáveis (shadcn/ui)
├── config/             # Configurações e constantes do projeto
├── lib/                # Utilitários e helpers
└── types/              # Interfaces e tipos TypeScript
```

## 💡 Decisões técnicas

### 🖥️ Tecnologias/Ferramentas

- **Tailwind CSS v4:** utilizei o Tailwind como solução de estilização pela agilidade no desenvolvimento e pela consistência visual que ele proporciona. A versão 4, ainda em fase de evolução, traz melhorias significativas de performance no build.

- **shadcn/ui:** optei pelo shadcn/ui para os componentes de UI por ser uma coleção de componentes acessíveis e totalmente customizáveis, que vivem diretamente no código do projeto. Isso facilita a manutenção e permite adaptações sem depender de uma biblioteca externa com sua própria camada de abstração.

- **Prettier/ESLint:** adicionei o Prettier e o ESLint para garantir a qualidade e padronização do código. Configurei o `prettier-plugin-tailwindcss` para ordenação automática das classes do Tailwind, mantendo o código limpo e consistente.

### 🎨 Decisões de Design e Arquitetura

- **Filtros Client/Server:** os filtros de categoria e faixa de preço são aplicados via `searchParams` na URL, o que permite que a filtragem ocorra no servidor. O componente de filtros é dividido em uma parte servidor (`filters.tsx`) e uma parte cliente (`filters-client.tsx`), separando claramente as responsabilidades.

- **Cache de produtos:** a função `getProducts` utiliza o sistema de cache do Next.js (`"use cache"`, `cacheTag`, `cacheLife`) para evitar requisições desnecessárias à API. Os dados são cacheados por horas, com tags para permitir revalidação granular quando necessário.

- **Paginação via URL:** a paginação também é controlada por `searchParams`, garantindo que o estado da página seja compartilhável por URL e que a navegação entre páginas não cause re-renders desnecessários no cliente.

---

<p align="center">
    Desenvolvido com 💙 por <a href="https://karolwojtyla.dev">Karol Wojtyla</a>
</p>
