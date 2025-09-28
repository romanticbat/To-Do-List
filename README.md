# 📋 To-Do-List

Uma aplicação simples de lista de tarefas (*to-do list*), com **front-end** e **back-end**, construída em **JavaScript**.

---

## 🧰 Estrutura do Projeto

```
To-Do-List/
├── backend/        # Servidor, lógica da API, banco de dados
├── frontend/       # Interface de usuário (web)
├── .gitignore
├── package.json
├── package-lock.json
├── todo.db         # Banco de dados local (SQLite ou similar)
└── README.md       # Documentação deste repositório
```

---

## ⚙ Tecnologias

- **Front-end:** React (Create React App)  
- **Back-end:** Node.js + JavaScript (possivelmente com Express)  
- **Banco de dados local:** SQLite (`todo.db`)  
- **Linguagem:** JavaScript

---

## 🚀 Instalação e uso

### Pré-requisitos
- Node.js instalado (versão compatível com o projeto)  
- npm ou yarn  
- (Opcional) Git, para clonar o repositório

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/romanticbat/To-Do-List.git
   cd To-Do-List
   ```

2. Instale dependências (caso o projeto seja monolito):
   ```bash
   npm install
   ```

   Se houver dependências separadas para **backend** e **frontend**, instale em cada pasta:
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. Inicialize o back-end:
   ```bash
   cd backend
   npm start
   ```
   *(ou conforme o script definido em `package.json` do backend)*

4. Inicialize o front-end (em outro terminal):
   ```bash
   cd frontend
   npm start
   ```
   Isso normalmente abre a interface em `http://localhost:3000`.

---

## 🧩 Funcionalidades

- ✅ Adicionar novas tarefas  
- ✅ Listar tarefas existentes  
- ✅ Marcar tarefas como concluídas  
- ✅ Remover tarefas  
- ✅ Persistência em banco local (SQLite)

---

## 📁 Scripts úteis

No `package.json` principal ou nos `package.json` de cada pasta:

| Comando         | Descrição                                                        |
|-----------------|------------------------------------------------------------------|
| `npm start`     | Inicia o servidor ou a interface, dependendo de onde for rodado  |
| `npm run build` | Gera a versão de produção do front-end                           |
| `npm test`      | Executa testes (se houver)                                       |

---

## 🔧 Possíveis melhorias

- [ ] Autenticação de usuário  
- [ ] Sincronização com banco remoto ou nuvem  
- [ ] Interface mais responsiva / mobile friendly  
- [ ] Layout customizado e temas  
- [ ] Adicionar filtros (tarefas concluídas / pendentes)  
- [ ] Testes automatizados (unitários e de integração)  

---

## 📜 Licença

Este repositório **não possui uma licença especificada** (até onde consta).  
Se desejar, adicione uma licença (por exemplo **MIT**, **Apache-2.0**, **GPL**) criando um arquivo `LICENSE`.

---

## ✉️ Autor

- GitHub: [romanticbat](https://github.com/romanticbat)  
- Sinta-se livre para abrir issues ou pull requests se quiser contribuir.
