To-Do-List

Uma aplicação simples de lista de tarefas ("to-do list"), com front-end e back-end, construída em JavaScript.

🧰 Estrutura do Projeto
To-Do-List/
├── backend/        # Servidor, lógica de API, banco de dados
├── frontend/       # Interface de usuário (web)
├── .gitignore
├── package.json
├── package-lock.json
├── todo.db         # Banco de dados local (SQLite ou similar)
└── README.md       # Documentação deste repositório

⚙ Tecnologias

Front-end: React (Create React App) 
GitHub

Back-end: JavaScript/Node.js (possivelmente com Express) 
GitHub

Banco de dados local: arquivo todo.db 
GitHub

🚀 Instalação e uso
Pré-requisitos

Node.js instalado (versão compatível com o projeto)

npm ou yarn

(Opcional) Git, para clonar o repositório

Passos

Clone o repositório

git clone https://github.com/romanticbat/To-Do-List.git
cd To-Do-List


Instale dependências

npm install


Se houver dependências separadas para frontend e backend, entre nas pastas correspondentes:

cd backend
npm install

cd ../frontend
npm install


Inicialize o back-end

cd backend
npm start


(ou conforme o script definido em package.json)

Inicialize o front-end

cd ../frontend
npm start


Isso deve abrir a interface da aplicação no navegador, geralmente em http://localhost:3000 
GitHub

🧩 Funcionalidades

Adicionar novas tarefas

Listar tarefas existentes

Marcar tarefas como concluídas

Remover tarefas

(Possivelmente) persistência em banco local

📁 Scripts úteis

No package.json principal ou nas pastas específicas:

Comando	Descrição
npm start	Inicia o servidor ou interface, dependendo de onde for executado
npm run build	Gera versão de produção do front-end
npm test	Executa testes (se houver)
🔧 Possíveis melhorias

Autenticação de usuário

Sincronização com banco remoto ou nuvem

Interface mais responsiva / mobile friendly

Layout customizado

Adicionar filtros (tarefas concluídas / pendentes)

Testes automatizados (unitários, de integração)

📜 Licença

Este repositório não possui uma licença especificada (até onde consta). Se desejar, adicione uma (por exemplo MIT, GPL etc.), para deixar claro os termos de uso.
