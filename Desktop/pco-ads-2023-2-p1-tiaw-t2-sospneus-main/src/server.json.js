const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Adicione um middleware para interceptar solicitações de criação de usuários
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/usuarios") {
    // Ler o arquivo db.json
    const db = router.db;

    // Calcular o próximo ID disponível
    const nextId = db.get("usuarios").value().length + 1;

    // Adicionar o ID ao corpo da solicitação
    req.body.id = nextId;
  }

  // Continue para o próximo middleware
  next();
});

// Use o roteador
server.use(router);

// Inicie o servidor na porta 3000
server.listen(3000, () => {
  console.log("JSON Server está rodando na porta 3000");
});
