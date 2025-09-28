const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com banco
const db = new sqlite3.Database("./todo.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco", err);
  } else {
    console.log("Banco conectado!");
  }
});

// Criar tabela
db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  done INTEGER DEFAULT 0
)`);

// ====================== CRUD ======================

// Listar tarefas
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Criar tarefa
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  db.run("INSERT INTO tasks (title) VALUES (?)", [title], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, title, done: 0 });
  });
});

// Editar tarefa
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;
  db.run("UPDATE tasks SET title = ?, done = ? WHERE id = ?", [title, done, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

// Deletar tarefa
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

// ==================================================

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
