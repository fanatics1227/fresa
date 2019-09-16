const Discord = require("discord.js")
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {
    let userm = message.mentions.users.first()
    if(!userm) return message.reply(" Debes mencionar a alguien")
   let embed = new Discord.RichEmbed()
  .addField(message.author.username + " a matado a", userm)
  .setImage(fresa.kill())
  .setColor("FF0000")
  message.channel.send(embed) 
}