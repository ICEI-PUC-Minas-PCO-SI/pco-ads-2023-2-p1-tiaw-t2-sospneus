const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Middleware para permitir requisições POST e configurar o CORS
app.use(bodyParser.json());
app.use(cors());

// Seu banco de dados em memória
const db = {
  usuarios: [],
};

// Rota para autenticação de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = db.login.find((user) => user.email === email);

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    // Simule a verificação da senha (use bcrypt em um ambiente real)
    if (senha !== user.senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gere um token JWT
    const token = jwt.sign({ userId: user.id }, "secreto", { expiresIn: "1h" });

    // Armazenar o token e o e-mail no localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", user.email);

    // Redirecionar para a página Cliente.html
    window.location.href = "Cliente.html";

    res.json({
      message: "Login bem-sucedido",
      usuario: user,
      token: token,
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

// Rota para criar uma avaliação
app.post("/avaliacoes", (req, res) => {
  const { nome, data, comentario, rating } = req.body;

  try {
    const novaAvaliacao = {
      nome,
      data,
      comentario,
      rating,
    };

    // Adicione a nova avaliação ao banco de dados
    db.avaliacoes.push(novaAvaliacao);

    res.status(201).json({
      message: "Avaliação criada com sucesso",
      avaliacao: novaAvaliacao,
    });
  } catch (error) {
    console.error("Erro ao criar avaliação:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});
