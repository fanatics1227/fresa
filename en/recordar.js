const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   let texto = args.join(" ").split(" | ")
      if(!texto[0]) return message.channel.send("Pon el número deseado entre 1-100")
      let number = texto[0]
     if(isNaN(number)) return message.channel.send("Necesitas escribir un número, no letras ni símbolos.")
      number = parseInt(number)
/*  var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la multiplicación entre 10 y 5
var multiplicacion = app.multiplicar(100, number);
let time = multiplicacion*/
  if(!texto[1]) return message.reply('Debes poner el recordatorio separado por un `|`')
  message.reply('Tu recordatorio a sido programado ')
setTimeout(() => {
message.reply('Debes Recordar: `'+texto[1]+'`')
}, number); // Tiempo en milisegundos.
}