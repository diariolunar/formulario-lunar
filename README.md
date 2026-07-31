# Formulário Lunar

Aplicação web mobile-first para receber e administrar inscrições dos subs **A1 — Chama Eterna**, **A6 — Trono Profano**, **A7 — Margens de Mundos** e **A17 — Lâmina Sombria**. Cada sub tem uma rota e identidade visual próprias; não existe seletor público entre os formulários.

- Produção: https://formulario-lunar.vercel.app
- Repositório: https://github.com/diariolunar/formulario-lunar

## Tecnologias

- Next.js 16, React 19 e TypeScript
- Firebase Firestore e Firebase Authentication (e-mail/senha)
- Vitest e Playwright
- Vercel

## Rotas

- `/formulario/a1`
- `/formulario/a6`
- `/formulario/a7`
- `/formulario/a17`
- `/admin` — login e painel privado

A rota `/` redireciona para `/admin` e não oferece seleção pública de subs.

## Instalação e execução local

Requer Node.js 22.13 ou superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`. Preencha `.env.local` antes de testar operações com Firebase.

## Variáveis de ambiente

Todas as variáveis públicas abaixo pertencem à configuração Web do Firebase; elas identificam o projeto, mas não substituem as regras de segurança.

```text
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_SITE_URL
```

`E2E_ADMIN_EMAIL` e `E2E_ADMIN_PASSWORD` são opcionais e exclusivos dos testes E2E. Nunca versione `.env`, `.env.local` ou credenciais administrativas.

## Configuração do Firebase

1. Crie um projeto Firebase e registre um app Web.
2. Crie um banco Cloud Firestore em modo Native.
3. Em **Authentication → Sign-in method**, ative **E-mail/senha**. Não ative cadastro público na aplicação.
4. Em **Authentication → Users**, crie manualmente a conta administrativa com e-mail e senha fortes. O código não contém senha, cadastro nem autenticação simulada.
5. Copie a configuração Web para `.env.local` e para as variáveis do projeto na Vercel.
6. Associe o projeto no `.firebaserc` e publique regras/índices:

```bash
firebase deploy --only firestore
```

### Estrutura do Firestore

As respostas ficam na coleção `submissions`. Cada documento possui `id`, `sub`, dados do membro e da obra, respostas estruturadas e `createdAt` com timestamp do servidor. O painel consulta cada sub com `where("sub", "==", sub)` e `orderBy("createdAt", "desc")`, garantindo o isolamento na própria consulta.

### Segurança

`firestore.rules` permite que visitantes apenas criem documentos válidos. Leitura, listagem e exclusão exigem usuário autenticado; atualização é bloqueada. Como o app não oferece cadastro, somente contas criadas no console podem acessar o painel.

## Administração

Em `/admin`, o administrador entra com e-mail e senha do Firebase Authentication. O painel apresenta contadores por sub, respostas recentes, visualização completa, prévia byte a byte do template do WhatsApp, cópia para a área de transferência e exclusão com confirmação. A exclusão só altera a interface depois da confirmação do Firestore.

## Testes e qualidade

```bash
npm test
npm run lint
npm run build
npm run test:e2e
```

Os testes unitários comparam os quatro formatadores por igualdade completa (`toBe`), cobrindo emojis, acentos, pontuação, aspas, barras, `?` e `&`. Os testes funcionais devem usar uma conta administrativa dedicada e excluir todos os registros de teste ao terminar.

## Deploy na Vercel

1. Importe o repositório na Vercel ou execute `vercel`.
2. Cadastre todas as variáveis `NEXT_PUBLIC_*` nos ambientes Production, Preview e Development.
3. Execute `vercel --prod`.
4. Valide as cinco rotas publicadas, os quatro envios, isolamento, visualização, cópia, cancelamento/exclusão e persistência após refresh.

## Organização principal

```text
app/
  admin/
  formulario/[sub]/
components/
lib/
  whatsapp/
firestore.rules
firestore.indexes.json
tests/
```

As artes em `public/themes` foram geradas especificamente para este projeto e são carregadas somente pela página que aplica a respectiva identidade.
