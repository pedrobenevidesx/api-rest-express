# api-rest-express

API REST simples construída com **Express** e **TypeScript**, com validação de dados usando **Zod**. Projeto de estudo, com uma rota de produtos e um middleware de exemplo.

## Tecnologias

- Node.js
- Express
- TypeScript
- Zod (validação de dados)

## Estrutura do projeto

```
src/
├── controllers/
│   └── ProductsController.ts   # lógica das rotas de produtos
├── middlewares/
│   └── my-middleware.ts        # middleware de exemplo (injeta user_id fake na request)
├── routes/
│   ├── index.ts                # agrega as rotas da aplicação
│   └── products_routes.ts      # rotas de /products
├── types/
│   └── request.d.ts            # extensão do tipo Request do Express (user_id)
├── utils/
│   └── AppError.ts             # classe de erro customizada
└── server.ts                   # ponto de entrada, configuração do Express
```

## Rotas disponíveis

### `GET /products`

Recebe `page` e `limit` como query params e retorna uma mensagem indicando os parâmetros recebidos (endpoint de exemplo, sem paginação real de dados ainda).

```
GET /products?page=1&limit=10
```

### `POST /products`

Cria um produto. Passa antes pelo `my-middleware`, que injeta um `user_id` fixo na requisição (simulação de usuário autenticado).

Corpo esperado (validado com Zod):

```json
{
  "name": "Nome do produto",
  "price": 99.9
}
```

Regras de validação:
- `name`: obrigatório, string, mínimo de 4 caracteres
- `price`: obrigatório, número positivo

Se a validação falhar, a API retorna `400` com os detalhes do erro. Se der certo, retorna `201` com o produto criado.

## Tratamento de erros

O `server.ts` tem um middleware global de erros que trata:
- `AppError` → retorna o `statusCode` e a mensagem definidos no erro
- `ZodError` → retorna `400` com os detalhes da validação que falhou
- Qualquer outro erro → retorna `500`

## Como rodar

```bash
npm install
npm run dev
```

> Obs: confira o `package.json` do projeto para o nome exato do script de execução (pode variar, ex: `dev`, `start`).

A aplicação sobe por padrão na porta `3333`.
