const Discord = require("discord.js")
const Weez = require('weez');
var weez = new Weez.WeezAPI("6tKYCrsrKq2HserbkjJdrD6OnArBLf3OF31a");

exports.run = async (client, message, args) => {
  let userM = message.mentions.users.first();
if(!userM) return message.reply('debes mencionar a un usuario')
  let user = message.author
  
  let img = await weez.drake(user.avatarURL, userM.avatarURL)
  
  message.channel.send({files: [img]})
}