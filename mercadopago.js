          
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-7233187236890825-030402-f236fad558288cb4130c8d049e749364-176563356",
});


// Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      res.json({
        id: response.body.id
    });
    })
    .catch(function (error) {
      console.log(error);
    });