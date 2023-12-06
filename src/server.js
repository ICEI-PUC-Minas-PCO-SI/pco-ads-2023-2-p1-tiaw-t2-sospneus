const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = 3001; // Usando uma porta diferente para o servidor

// Middleware para permitir requisições POST
app.use(bodyParser.json());

// Rota para autenticação de login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = db.get("usuarios").find({ username }).value();

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(password, user.password);

    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Iniciar o JSON Server com as rotas personalizadas
const jsonServerRouter = jsonServer.router("db.json");
const jsonServerMiddlewares = jsonServer.defaults();
app.use("/api", jsonServerMiddlewares, jsonServerRouter);
