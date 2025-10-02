# To‑Do List

Uma aplicação de lista de tarefas (To‑Do) com frontend + backend, destinada a gerenciar atividades, marcar como concluídas etc.

## Funcionalidades

- Criar uma nova tarefa  
- Editar tarefas existentes  
- Marcar tarefa como concluída / pendente  
- Remover tarefa  
- Listagem de todas as tarefas  
- Possível separação entre frontend e backend  

## Tecnologias usadas

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: (Aqui colocar a linguagem / framework usado — por exemplo, Node.js / Express, Python / Flask, etc.)  
- Gerenciamento de dependências via `package.json`  
- Estrutura organizada em pastas `frontend/` e `backend/`  

## Estrutura do projeto

```
/
├── backend/               # código do servidor (API)
├── frontend/              # interface cliente (HTML, CSS, JS)
├── package.json
├── package-lock.json
└── README.md
```

## Instalando / Executando localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/romanticbat/To-Do-List.git
   cd To-Do-List
   ```

2. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```

3. (Se aplicável) inicie o servidor backend:
   ```bash
   npm start
   ```

4. Instale dependências do frontend (se necessário) e rode localmente:
   ```bash
   cd ../frontend
   # Exemplo, se for uma aplicação com bundler / dev server:
   npm install
   npm start
   # ou simplesmente abra o arquivo index.html no navegador
   ```

5. Acesse via navegador (por exemplo) em `http://localhost:3000` ou conforme porta configurada.

## Uso

- Na interface, adicione uma nova tarefa preenchendo o campo de entrada e clicando em “Adicionar”  
- As tarefas adicionadas serão mostradas em uma lista  
- Você pode marcar uma tarefa como concluída clicando em um botão ou checkbox  
- Também pode editar o texto da tarefa ou removê-la  

## Configurações & variáveis de ambiente

Se a API backend requer configurações (ex: porta, URL de banco de dados), defina variáveis de ambiente como:

- `PORT` — porta onde o servidor roda  
- `DB_URL` / `DATABASE_URL` — string de conexão com banco de dados  
- Outras variáveis específicas (ex: chaves secretas)  

Inclua também um arquivo `.env.example` com os nomes dessas variáveis (mas sem valores sensíveis).

## Contribuição

1. Faça um fork deste repositório  
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)  
3. Faça suas alterações e commit (`git commit -m "Adiciona nova funcionalidade"`)  
4. Envie para seu fork (`git push origin feature/nova-funcionalidade`)  
5. Abra um Pull Request e aguarde revisão  

## Licença

Indique aqui a licença do projeto (por exemplo, MIT, Apache, etc.).  
Exemplo:

Este projeto está sob licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.
