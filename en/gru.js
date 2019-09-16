const Discord = require("discord.js")
const Weez = require('weez');
var weez = new Weez.WeezAPI("6tKYCrsrKq2HserbkjJdrD6OnArBLf3OF31a");

exports.run = async (client, message, args) => {
  let gru = args.join(" ").split(" | ");
  if(!gru[0]) return message.reply("debes poner todos los textos separados con un '|'")
  if(!gru[1]) return message.reply("debes poner todos los textos separados con un '|'")
  if(!gru[2]) return message.reply("debes poner todos los textos separados con un '|'")
  
  let img = await weez.gru(gru[0], gru[1], gru[2])
  
  message.channel.send({files: [img]})
}