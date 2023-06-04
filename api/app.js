const express = require("express");
const app = express();
const { pagos, infoPago } = require("./utils/mercadopago");
//const server = require("http").createServer(app);
//const io = require("socket.io")(server);
const cors = require("cors");
const morgan = require("morgan");
let users = [];

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", () => {
  // Manejar eventos de conexión
  io.on("connection", (socket) => {
    console.log("Un nuevo cliente se ha conectado");

    // Manejar eventos de chat
    socket.on("chat message", (message) => {
      console.log("Mensaje recibido:", message);
      // Emitir el mensaje a todos los clientes conectados
      io.emit("chat message", message);
    });

    // Manejar evento de desconexión
    socket.on("disconnect", () => {
      console.log("Un cliente se ha desconectado");
    });
  });
});
app.post("/", (req, res) => {
  const { name, sub, nickname } = req.body;

  console.log(req.body);

  const busca = users.find((user) => user.sub === sub);

  if (busca) return res.status(200).json(users);

  users.push({ name, nickname, sub });

  return res.status(200).json(users);
});

app.post("/pago", pagos);

app.get("/failure", (req, res) => {
  res.send("OH NOOOOO!");
});
app.get("/pending", (req, res) => {
  res.send("POOOOOE QUUUUUEEEE!");
});
app.get("/success", (req, res) => {
  res.send("OHHHHHH SIIIIIIIIII!");
});
app.post("/infopago", infoPago);

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor en ejecución en http://localhost:3000");
});
