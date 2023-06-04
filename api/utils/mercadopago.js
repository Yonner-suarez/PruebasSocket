const mercadopago = require("mercadopago");
const nodemailer = require("nodemailer");

// mercadopago.configurations.setAccessToken(
//   "APP_USR-337264305447969-052614-80973a1ef2955859972d93c9816d3763-1383343081"
// );
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "casaeuropeaderepuestos@gmail.com",
    pass: "jzmc ttdm mvaz bhkt",
  },
});

const repestos = [
  {
    id: 1,
    nombre: "Campanas Vw Crossfox 1.6",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h_480,w_240/Campanas%20Vw%20Crossfox%201.6",
    precio: "260",
    calificacion: 0,
  },

  {
    id: 2,
    nombre: "Kit Embrague Vw Crafter 2.5",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h_480,w_240/Kit%20Embrague%20Vw%20Crafter%202.5",
    precio: "2.600",
    calificacion: 0,
  },

  {
    id: 3,
    nombre: "Discos de freno Vw Jetta Golf IV 2.0 Del",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h…20de%20freno%20Vw%20Jetta%20Golf%20IV%202.0%20Del",
    precio: "360",
    calificacion: 0,
  },

  {
    id: 4,
    nombre: "Discos de freno Vw Gol 1.6 1.8 Del Vent",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h…%20de%20freno%20Vw%20Gol%201.6%201.8%20Del%20Vent",
    precio: "250",
    calificacion: 0,
  },

  {
    id: 5,
    nombre: "Discos de freno Vw Gol 1.6 1.8 Del Solid",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h…20de%20freno%20Vw%20Gol%201.6%201.8%20Del%20Solid",
    precio: "260",
    calificacion: 0,
  },

  {
    id: 6,
    nombre: "Kit Embrague Escarabajo 1.6",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h_480,w_240/Kit%20Embrague%20Escarabajo%201.6",
    precio: "480",
    calificacion: 0,
  },

  {
    id: 7,
    nombre: "Kit Embrague Vw Gol 1.0",
    imagen:
      "http://res.cloudinary.com/de8cx2rgu/image/upload/h_480,w_240/Kit%20Embrague%20Vw%20Gol%201.0",
    precio: "560",
    calificacion: 0,
  },
];

mercadopago.configure({
  access_token:
    "TEST-337264305447969-052614-1a8550f94f6f169b0947602117976077-1383343081",
});
let preference = {
  items: repestos.map((rep) => {
    let number = parseFloat(rep.precio.replace(/\./g, "").replace(",", "."));
    return {
      tiitle: rep.nombre,
      unit_price: number,
      currency_id: "COP",
      quantity: 1,
    };
  }),
  back_urls: {
    success: "http://localhost:3000/success",
    pending: "http://localhost:3000/pending",
    failure: "http://localhost:3000/failure",
  },
  notification_url:
    "https://523d-2803-1800-1242-1241-e5ff-f682-4c02-fdee.ngrok.io/infopago",
  binary_mode: true,
  auto_return: "approved",
  expires: true,
  installments: 1,
};

const pagos = async (req, res) => {
  try {
    const resp = await mercadopago.preferences.create(preference);
    console.log(resp.body);
    res.status(200).json(resp.body.init_point);
  } catch (error) {
    console.log(error);
  }
};

const infoPago = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const resp = await mercadopago.payment.findById(payment["data.id"]);

      let mailOptions = {
        from: "casaeuropeaderepuestos@gmail.com",
        to: "yonnerhazziel@gmail.com",
        subject: "Compra Exitosa",
        text: "Hola, esto es un correo de prueba enviado con Nodemailer.",
        html: "<b>Hola,</b><br>Esto es un correo de prueba enviado con <strong>Nodemailer</strong>.",
      };

      // Envía el correo electrónico
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Correo electrónico enviado: " + info.response);
        }
      });

      res.sendStatus(204);
    } else {
      res.send("algo salio mal");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { pagos, infoPago };

/*

*/
